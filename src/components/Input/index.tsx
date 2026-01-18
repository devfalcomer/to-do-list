import styles from './styles.module.css';

type InputProps = {
  id: string;

} & React.ComponentProps<'input'>; //Permite receber as propriedades do input que tem no HTML

export function Input({id, type, ...rest}: InputProps) {
  //O rest permite receber o resto das propriedades faltantes no componente
  return(
    <>
      <input className={styles.input} id={id} type={type} {...rest}/>
    </>
  )
}