import {useState} from "react";
import {FakeLogin} from "../../api/api.js";
import {LoadingOutlined} from "@ant-design/icons";

const LoginForm = ()=>{
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = async (e)=> {
        e.preventDefault();

        setPending(true);
        setError(null);
        setResult('')

        try{
            await FakeLogin({email, password})
            setResult('Email' + email+ ' logged in')
        }catch (e){
            setError(e.message)
        }finally {
            setPending(false);
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="input-field">
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Ivan@gmail.com"
                    style={{border: "solid 1px black", borderRadius: "5px"}}
                    required
                />
                <label htmlFor="email">Email</label>

            </div>
            <div className="input-field">
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    style={{border: "solid 1px black", borderRadius: "5px"}}
                    required
                />
                <label htmlFor="password">Password</label>
            </div>
            <button type="submit">{pending ? <LoadingOutlined /> : 'Submit'}</button>
            {result && <p>{result}</p>}
            {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
    )


}
export {LoginForm};