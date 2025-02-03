const RedHighlight = ({ children }) => {
  return (
    <span style={{ color: 'red', fontWeight: 500 }}>
      {children}
    </span>
  );
};

export default RedHighlight;