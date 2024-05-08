/* eslint-disable react/prop-types */
import styles, { layout } from '../style';


const FormElement = ({ type, label, placeholder, name, fieldRef, hasError }) => {
  const classes = "form-control w-full px-3 py-1.5 text-white border border-solid border-gray-700 focus:border-pick-600 focus:outline-none bg-black-gradient-2 rounded-[5px] box-shadow";
  return (
    <div className={layout.sectionInfo}>
        <label className={`${styles.paragraph}`}>{label}</label>
        {type === 'textarea' ? (
            <textarea name = {name} className={classes} rows="3" placeholder={placeholder} {...fieldRef} />
        ) : (
            <input className={classes} type={type} placeholder={placeholder} name = {name} {...fieldRef}/>
        )}
        {hasError && <p className={`${styles.paragraph} max-w-[470px] mt-5`}>{`${label} ist erforderlich`}</p>}
    </div>
  )
}

export default FormElement;