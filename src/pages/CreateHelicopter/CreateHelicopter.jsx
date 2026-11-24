import React from 'react';
import { useNavigate } from 'react-router-dom';
import HelicopterForm from '../../components/HelicopterForm/HelicopterForm';
import { useHelicopters } from '../../context/HelicoptersContext';
import './CreateHelicopter.css';

const CreateHelicopter = () => {
  const navigate = useNavigate();
  const { addHelicopter } = useHelicopters();

  const handleCreate = async (data) => {
    await addHelicopter(data);
    navigate('/catalog');
  };

  return (
    <HelicopterForm
      title="Create helicopter"
      submitLabel="Create"
      submittingLabel="Creating..."
      cancelTo="/catalog"
      cancelLabel="Cancel and return to list"
      onSubmit={handleCreate}
    />
  );
};

export default CreateHelicopter;
