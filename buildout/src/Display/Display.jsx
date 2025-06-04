import {useState } from "react";
import styles from "./Display.module.css";
export default function Display(){
        const [fullName,setFullName]=useState("");
        const[lastName,setLastName]=useState("");
        const[display,setDisplay] = useState(false);
        const handlerClick=()=>{
            if(fullName && lastName){
                setDisplay(true);
            }else{
                setDisplay(false);
            }
        }
    console.log(fullName,lastName);
    const handleSubmit=(e)=>{
        e.preventDefault();
        setDisplay(true);
    }
    return(
        <form onSubmit={handleSubmit} style={{border:"1px solid green",height:"100vh",width:"100vw",display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"}}>
            <h1>Full Name Display</h1>
            <div>
                First Name : {" "}
                <input type="text" value={fullName} placeholder="enter your fullName" className={styles["placeholder"]} onChange={(e)=>setFullName(e.target.value)} required/>
            </div>
            <div>
                Last Name: {" "}
                <input value={lastName} placeholder="enter your LastName" className={styles["placeholder"]} onChange={(e)=>setLastName(e.target.value)} required/>
            </div>
            <div><button style={{padding:"10px"}} onClick={handlerClick}>Submit</button></div>
            {display && (
                 <div style={{color:"black"}}>
                    Full Name: {fullName} {lastName}
                 </div>
            )}
        </form>
    )
}
