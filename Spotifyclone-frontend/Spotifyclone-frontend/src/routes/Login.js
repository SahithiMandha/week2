import { Icon }from '@iconify/react';
import TextInput from '../components/TextInput';
import PasswordInput from '../components/PasswordInput'

function LoginComponent() {
    return <div className="w-full h-full flex flex-col items-center">
        <div className="logo p-5 border-b border-solid border-gray-300 w-full flex justify-center">
        <Icon icon="logos:spotify"  />
        </div>
        <div className="inputRegion w-1/3 py-10 flex items-center justify-center flex-col">
             <div className="font-bold mb-4">
                    To continue, log in to Spotify.
              </div>
       
             <TextInput
                    label="Email address or username"
                    placeholder="Email address or username"
                   className="my-6"
                />
             <PasswordInput
                    label="Password"
                    placeholder="Password"
                    
                />
                 <div className=" w-full flex items-center justify-end my-8">
                    <button
                        className="bg-green-400 font-semibold p-3 px-10 rounded-full">
                        LOG IN
                    </button>
                </div>
                <div className="w-full border border-solid border-gray-300"></div>
                <div className="my-6 font-semibold text-lg">
                    Don't have an account?
                </div>
                <div className="border border-gray-500 text-gray-500 w-full flex items-center justify-center py-4 rounded-full font-bold">
                    Sign Up for Spotify
                </div>
        </div>
    </div>;
};
export default LoginComponent;