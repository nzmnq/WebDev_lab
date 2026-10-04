document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-form");
  const nameInput = document.getElementById("name");
  const descInput = document.getElementById("description");
  const speedInput = document.getElementById("maxSpeed");
  const passengersInput = document.getElementById("passengers");
  const alertBox = document.getElementById("form-alert");

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

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const errors = validateForm();

    if (errors.length > 0) {
      if (alertBox) {
        alertBox.classList.add("visible");
      }

      Modal.show({
        title: "Validation Error",
        message: "Please correct the following errors:",
        errors: errors,
        type: "error"
      });
    } else {
      if (alertBox) {
        alertBox.classList.remove("visible");
      }

      const newHelicopter = {
        id: Date.now(),
        name: nameInput.value.trim(),
        description: descInput.value.trim(),
        maxSpeed: Number(speedInput.value),
        passengers: Number(passengersInput.value)
      };

      addedHelicopters.push(newHelicopter);

      try {
        const stored = localStorage.getItem("helicopters");
        let list = stored ? JSON.parse(stored) : [
          { id: 1, name: "Sikorsky UH-60", passengers: 14, maxSpeed: 295, description: "Багатоцільовий тактичний вертоліт армії США, розроблений для десантування та евакуації." },
          { id: 2, name: "Boeing CH-47 Chinook", passengers: 55, maxSpeed: 315, description: "Важкий військово-транспортний вертоліт із двома поздовжніми гвинтами для великих вантажів." },
          { id: 3, name: "Eurocopter EC135", passengers: 7, maxSpeed: 287, description: "Легкий дводвигуновий багатоцільовий вертоліт, популярний у поліцейських та рятувальних службах." },
          { id: 4, name: "Bell 206 JetRanger", passengers: 4, maxSpeed: 222, description: "Один із наймасовіших і найнадійніших комерційних вертольотів у світовій цивільній авіації." },
          { id: 5, name: "AgustaWestland AW101", passengers: 30, maxSpeed: 309, description: "Середній багатоцільовий трьохдвигуновий вертоліт для пошуково-рятувальних операцій." }
        ];
        list.push(newHelicopter);
        localStorage.setItem("helicopters", JSON.stringify(list));

        const storedAdded = JSON.parse(localStorage.getItem("addedHelicopters") || "[]");
        storedAdded.push(newHelicopter);
        localStorage.setItem("addedHelicopters", JSON.stringify(storedAdded));
      } catch (err) {}

      form.reset();

      Modal.show({
        title: "Success",
        message: "Helicopter has been successfully validated and created!",
        type: "success",
        onClose: () => {
          window.location.href = "./index.html";
        }
      });
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

const addedHelicopters = [];
