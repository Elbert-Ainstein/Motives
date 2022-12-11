import styles from '../styles/Contact.module.css';
export const links = () => [
    {
        rel: "stylesheet",
        href: styles
    }
]
export default function Help() {
    return <>
        <div  className="bg-white w-full h-screen ">
            <div className="flex h-50 flex-lb">
                <div className="card bg-primary text-primary-content m-24">
                    <div className="card-body text-center">
                        <h2 className="card-title text-center">Email</h2>
                        <p>Our email is <a href="mailto:contact@caffeinated.store"><code>260878@hkis.edu.hk</code></a>!</p>
                    </div>
                </div>
                <div className="card bg-accent text-accent-content m-24">
                    <div className="card-body">
                        <h2 className="card-title">Twitter</h2>
                        <p>Drop us a message on Twitter!</p>
                        <div className="card-actions justify-end">
                            <a href="https://twitter.com/"><button className="btn">Open</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
}