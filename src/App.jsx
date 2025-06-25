import { useState } from "react";
import "./App.css";
import Mood from "./Mood";

function App() {
  const Moods = {
    happy: [
      "Keep shining—your joy is contagious! ✨",
      "Share your smile with someone today 😄",
      "Use this energy to do something you love 💖",
      "Your light is a blessing—don't dim it 🌟",
      "Grateful hearts attract more to be grateful for 🙌",
    ],
    sad: [
      "It's okay to feel this way. You're not alone 🤍",
      "Crying is strength. Let it out, then rise again 💧",
      "You’ve made it through hard days before—you will again 💪",
      "Talk to someone. You're not a burden 💬",
      "Be gentle with yourself. Healing takes time 🕊️",
    ],
    angry: [
      "Pause. Breathe. You're stronger than your anger 😮‍💨",
      "Step away and give yourself space—it’s okay 🧘",
      "Write it down. Let your thoughts breathe ✍️",
      "Reacting calmly is power in action ⚡",
      "You’re not your anger. You’re peace in progress 🌱",
    ],
    tired: [
      "Rest is productive too. Recharge 🔋",
      "Close your eyes for 60 seconds—it helps 😌",
      "Drink some water and breathe deeply 😁",
      "Your worth isn’t based on your energy 💗",
      "You’ve done enough for today. Be proud and rest 🛏️",
    ],
  };

  const [message, setMessage] = useState("");

  function DisplayMessage(value) {
    console.log(Moods[value]);

    const messageValue =
      Moods[value][Math.floor(Math.random() * Moods[value].length)];
    setMessage(messageValue);
  }

  return (
    <section>
      <h1>How are you feeling today?</h1>
      <input type="text" value={message} onChange={() => {}} readOnly />
      <div className="buttons">
        <Mood title="Happy" className="Happy"
        onClick={() => DisplayMessage("happy")}>
          😁
        </Mood>
        <Mood title="Sad" 
        className="Sad"
        onClick={() => DisplayMessage("sad")}>
          😞
        </Mood>
        <Mood
          title="Angry"
          className="Angry"
          onClick={() => DisplayMessage("angry")}
        >
          😡
        </Mood>
        <Mood title="Tired"
         className="Tired"
         onClick={() => DisplayMessage("tired")}>
          😩
        </Mood>
      </div>
    </section>
  );
}

export default App;
