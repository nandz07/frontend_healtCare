export default function formateDate(date, config) {
    const defaultOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const options = config ? { ...defaultOptions, ...config } : defaultOptions;
  
    try {
      return new Date(date).toLocaleDateString("en-US", options);
    } catch (error) {
      console.error("Error formatting date:", error);
      // You can handle the error here, e.g., return a default formatted date
      return "Invalid Date"; // Or any other default string
    }
  }
  