import  {useState} from 'react';
import axios from "axios";

function useAdvice(){
  const [adviceState, setAdvice] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchAdvice = () => {
    setLoading(true);
    axios.get("https://api.adviceslip.com/advice")
      .then((res) => 
        {
          setAdvice(res.data.slip); 
          setLoading(false);
          setError("");
        })
      .catch((error) => 
        {
          console.log(error);
          setError(error);
          setLoading(false);
        });
  }

  return {adviceState, loading, error, fetchAdvice}
}

export default useAdvice;