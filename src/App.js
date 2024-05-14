import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

              const [url, setUrl] = useState()
              const [shortendUrl, setShortenedUrl] = useState('')
              const shortenUrl = async (e) => {
                e.preventDefault();
                try {
                  const response = await axios.post(`https://api-ssl.bitly.com/v4/shorten`,{
                   long_url : url,
                  },{
                headers:{
                  'Content-Type' : 'application/json',
                  'Authorization':'2f71c791d1269b65c953bed80da1f8d4bcf15680'  // user  ur tken are for api auth
                  } 
            
                });  
                  setShortenedUrl(response.data.id);
                } catch (e) {
                  console.log(e);
                }
            };
  return (
   <>
    <div className="app">
      <div className='shortener'>
        <h2>URL Shorter</h2>
        {/* form to enter URL to be shortened */}
        <form onSubmit={shortenUrl}>
          <input
            placeholder='Enter URL'
            value={url}
            onChange={(e) => setUrl(e.target.value)}/>
          <button>Generate</button>
        </form>
        {/* Section to view shortened URLS */}
        {shortendUrl &&
          <div className='shortener__viewShot'>
            <a href={`https://${shortendUrl}`} rel='noopener' target='_blank'>{shortendUrl}</a>
          </div>
        }
      </div>
    </div>
</>
  );
}

export default App;
