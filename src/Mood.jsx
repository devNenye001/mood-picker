
export default function Mood({ children, title, className, onClick }) {
  return (
      <button title={title} className={className} onClick={onClick}>
        {children}
      </button>
  );
}
