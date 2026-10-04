import { getHelicopterById, updateHelicopter } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const form = document.getElementById("edit-form");
  const nameInput = document.getElementById("name");
  const descInput = document.getElementById("description");
  const speedInput = document.getElementById("maxSpeed");
  const passengersInput = document.getElementById("passengers");
  const alertBox = document.getElementById("form-alert");

  const sampleHelicopter = {
    name: "Sikorsky UH-60",
    description: "Багатоцільовий тактичний вертоліт армії США, розроблений для десантування та евакуації.",
    maxSpeed: 295,
    passengers: 14
  };

  const urlParams = new URLSearchParams(window.location.search);
  const heliId = urlParams.get("id");

  if (heliId) {
    try {
      const heli = await getHelicopterById(heliId);
      if (heli) {
        nameInput.value = heli.name || "";
        descInput.value = heli.description || "";
        speedInput.value = heli.maxSpeed || "";
        passengersInput.value = heli.passengers || "";
      }
    } catch (err) {
      console.error(err);
      nameInput.value = sampleHelicopter.name;
      descInput.value = sampleHelicopter.description;
      speedInput.value = sampleHelicopter.maxSpeed;
      passengersInput.value = sampleHelicopter.passengers;
    }
  } else {
    nameInput.value = sampleHelicopter.name;
    descInput.value = sampleHelicopter.description;
    speedInput.value = sampleHelicopter.maxSpeed;
    passengersInput.value = sampleHelicopter.passengers;
  }

  function validateForm() {
    const errors = [];

    [nameInput, descInput, speedInput, passengersInput].forEach(input => {
      input.classList.remove("invalid");
    });

    const nameVal = nameInput.value.trim();
    if (!nameVal) {
      errors.push("Title / Name is required.");
      nameInput.classList.add("invalid");
    } else if (nameVal.length < 3 || nameVal.length > 50) {
      errors.push("Title must be between 3 and 50 characters.");
      nameInput.classList.add("invalid");
    }

    const descVal = descInput.value.trim();
    if (!descVal) {
      errors.push("Description is required.");
      descInput.classList.add("invalid");
    } else if (descVal.length < 10 || descVal.length > 300) {
      errors.push("Description must be between 10 and 300 characters.");
      descInput.classList.add("invalid");
    }

    const speedVal = Number(speedInput.value);
    if (!speedInput.value || isNaN(speedVal)) {
      errors.push("Max speed is required and must be a number.");
      speedInput.classList.add("invalid");
    } else if (speedVal < 50 || speedVal > 600) {
      errors.push("Max speed must be between 50 and 600 km/h.");
      speedInput.classList.add("invalid");
    }

    const passVal = Number(passengersInput.value);
    if (!passengersInput.value || isNaN(passVal)) {
      errors.push("Passenger capacity is required and must be a number.");
      passengersInput.classList.add("invalid");
    } else if (passVal < 1 || passVal > 150) {
      errors.push("Passenger capacity must be between 1 and 150.");
      passengersInput.classList.add("invalid");
    }

    return errors;
  }

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (errors.length > 0) {
      if (alertBox) {
        alertBox.classList.add("visible");
      }

      Modal.show({
        title: "Validation Error",
        message: "Please correct the following errors before saving:",
        errors: errors,
        type: "error"
      });
    } else {
      if (alertBox) {
        alertBox.classList.remove("visible");
      }

      const updatedData = {
        name: nameInput.value.trim(),
        description: descInput.value.trim(),
        maxSpeed: Number(speedInput.value),
        passengers: Number(passengersInput.value)
      };

      try {
        if (heliId) {
          await updateHelicopter(heliId, updatedData);
        }

        Modal.show({
          title: "Success",
          message: "Helicopter details have been successfully updated!",
          type: "success",
          onClose: () => {
            window.location.href = "./index.html";
          }
        });
      } catch (err) {
        Modal.show({
          title: "Server Error",
          message: "Failed to update helicopter on the server.",
          type: "error"
        });
      }
    }
  });

  [nameInput, descInput, speedInput, passengersInput].forEach(input => {
    input.addEventListener("input", () => {
      input.classList.remove("invalid");
      if (alertBox) {
        alertBox.classList.remove("visible");
      }
    });
  });
});
