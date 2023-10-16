const Field = ({ name, label, children, className = "field grow" }) => (
  <div className={className} name={name}>
    <label className="input-label">{label}</label>
    {children}
  </div>
);

export default Field;
