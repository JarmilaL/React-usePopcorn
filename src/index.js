import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StarRating from './components/StarRating';
//import App from './App copy';

function TestStars() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This movie was rated {movieRating} stars.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {
      /* <App /> */

      /* <StarRating maxRating={5} />
    <StarRating maxRating={10} color="green" size={36} className="test" />
    <StarRating
      defaultRating={3}
      color="red"
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Excellent']}
    />
    <TestStars /> */

      <App />
    }
  </React.StrictMode>
);
