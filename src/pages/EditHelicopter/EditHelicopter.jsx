import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getHelicopterById } from '../../api/helicoptersApi';
import HelicopterForm from '../../components/HelicopterForm/HelicopterForm';
import Spinner from '../../components/Spinner/Spinner';
import { useHelicopters } from '../../context/HelicoptersContext';
import '../CreateHelicopter/CreateHelicopter.css';

const EditHelicopter = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { editHelicopter } = useHelicopters();

  const [helicopter, setHelicopter] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const loadItem = async () => {
      setIsLoading(true);
      setLoadError('');
      try {
        const data = await getHelicopterById(id, controller.signal);
        setHelicopter(data);
      } catch (err) {
        if (err.name === 'CanceledError' || err.code === 'ERR_CANCELED' || controller.signal.aborted) {
          return;
        }
        if (err.response?.status === 404) {
          setLoadError('Helicopter not found.');
        } else {
          setLoadError('Failed to load helicopter data from server.');
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    loadItem();
    return () => controller.abort();
  }, [id]);

  const handleUpdate = async (data) => {
    await editHelicopter(id, data);
    navigate(`/item/${id}`);
  };

  if (isLoading) {
    return (
      <div className="form-container">
        <Spinner label="Завантаження даних..." />
      </div>
    );
  }

  if (loadError || !helicopter) {
    return (
      <div className="form-container">
        <h1 className="form-title">Edit helicopter</h1>
        <div className="form-alert visible">{loadError || 'Helicopter not found.'}</div>
        <Link to="/catalog" className="btn-back">
          Return to catalog
        </Link>
      </div>
    );
  }

  return (
    <HelicopterForm
      title="Edit helicopter"
      initialValues={helicopter}
      submitLabel="Save changes"
      submittingLabel="Saving..."
      cancelTo={`/item/${id}`}
      cancelLabel="Cancel and return"
      onSubmit={handleUpdate}
    />
  );
};

export default EditHelicopter;
