export const validationService = {
  validateRegistrationForm: (formData) => {
    const { firstName, lastName, email, password, confirmPassword, gender, sportCenterId } = formData;
    const errors = {};

    // Validar firstName
    if (!firstName.trim()) {
      errors.firstName = 'El nombre es obligatorio';
    }

    // Validar lastName
    if (!lastName.trim()) {
      errors.lastName = 'El apellido es obligatorio';
    }

    // Validar email
    if (!email.trim()) {
      errors.email = 'El email es obligatorio';
    } else if (!email.includes('@')) {
      errors.email = 'Email no válido';
    }

    // Validar gender
    if (!gender) {
      errors.gender = 'Selecciona un género';
    }

    // Validar sportCenterId
    if (!sportCenterId) {
      errors.sportCenterId = 'Selecciona un centro deportivo';
    }

    // Validar password
    if (!password) {
      errors.password = 'La contraseña es obligatoria';
    } else if (password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
    }

    // Validar confirmPassword
    if (!confirmPassword) {
      errors.confirmPassword = 'Confirma tu contraseña';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Las contraseñas no coinciden';
    }

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  },
};