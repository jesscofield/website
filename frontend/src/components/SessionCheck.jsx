import userService from '../services/registerForm'
import "../styles/Form.css"
import { useNavigate } from 'react-router-dom'
import PathConstants from '../routes/pathConstants'

const SessionButtons = () => {
  const navigate = useNavigate();
  
  //успішне session authentication перевірка
  //пфсля оновлення видає інфу про юзера що зарегався до цього
  //навіть після перелогіну - видає логін вже новозалогіненого юзера
  //після connection break із сервером (xampp) всі дані щезають
  const checkUser = async() => {
    console.log('summoned')
    await userService.getUser()
  }

  const checkOut = async() => {
    try{
        console.log('logging out')
        const success = await userService.logOut()
        if(success){
            console.log('success')
            navigate(PathConstants.HOME)
            console.log('navigate executed')
        }
    }
    catch(err){
        throw err
    }
      
  }

  return (
    <>
        <div className="text">
        <form onSubmit={checkUser} className="registration-form">
            <p>Button for session authentication check</p>
            <button type='submit' className="submit-button">Check</button>
        </form>
        <form onSubmit={checkOut} className="registration-form">
            <p>Button for log out session check</p>
            <button type='submit' className="submit-button">Log out</button>
        </form>
        </div>
    </>
  );
}

export default SessionButtons;