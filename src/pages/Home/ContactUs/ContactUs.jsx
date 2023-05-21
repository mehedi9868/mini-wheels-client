import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const ContactUs = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        AOS.init();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            AOS.refresh();
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className="bg-gray-100 py-8" data-aos="fade-up" data-aos-delay="200">
            <div className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-red-500 underline underline-offset-8 text-center my-20" style={{ fontFamily: 'Kalam, cursive' }}>Contact Us</h2>
                <p className="text-gray-600 mb-8 text-center">
                    Have any questions or inquiries? Get in touch with us using the form below.
                </p>
                <div className="max-w-3xl mx-auto">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                                Your Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                                Your Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={4}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Enter your message"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
