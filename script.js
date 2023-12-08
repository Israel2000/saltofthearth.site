<script>
  function validateForm() {
    // Add your custom validation logic here

    // Example: Validate gender
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
      document.getElementById('genderError').innerHTML = 'Please select a gender.';
      return false;
    } else {
      document.getElementById('genderError').innerHTML = '';
    }

    // Example: Validate code
    const code = document.getElementById('question2').value;
    if (code.length < 6) {
      document.getElementById('codeError').innerHTML = 'Code must be at least 6 characters.';
      return false;
    } else {
      document.getElementById('codeError').innerHTML = '';
    }

    // Add similar validation for other fields

    return true; // Submit the form if all validations pass
  }
</script>