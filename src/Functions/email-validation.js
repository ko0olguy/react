const apiKey = '2dcc090fe80e4ee2aea4b91893081810'
const apiURL = 'https://emailvalidation.abstractapi.com/v1/?api_key=' + apiKey
const sendEmailValidationRequest = async (email) => {
  try {
      const response = await fetch(apiURL + '&email=' + email)
      const data = await response.json()
      const isValidSMTP = data.is_smtp_valid.value
      console.log(data)
      if (isValidSMTP) {
        return true
      } else {
        return false
      }
  } catch (error) {
      return false
  }
}

export default sendEmailValidationRequest