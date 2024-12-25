import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.png";
const Footer = () => {
    return (
        <div>
            <footer className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 mx-auto">
                    <div className="flex flex-col items-center text-center">
                        <a href="#">
                            <img className="w-auto h-32" src={logo} alt="Logo" />
                        </a>

                        <div className="flex flex-wrap justify-center mt-6 -mx-4">
                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Home</a>
                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Colleges</a>
                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Admission</a>
                            <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">My College</a>
                        </div>
                    </div>

                    <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                    <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                        <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>

                        <div className="flex -mx-2">
                            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                                <FaFacebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                                <FaTwitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400">
                                <FaInstagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
