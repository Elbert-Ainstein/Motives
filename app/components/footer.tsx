export default function Footer(){
  //ima add more to the footer
  return (
    <footer className="footer absolute left-0  w-full p-10 bg-gray-900 text-neutral-content">
      <div>
        <span className="footer-title">Company</span> 
        <a className="link link-hover" href="/about">About us</a>
        <a className="link link-hover" href="/contact">Contact</a>
        <a className="link link-hover" href="/jobs">Jobs</a>
      </div> 
      <div>
        <span className="footer-title">Legal</span> 
        <a className="link link-hover" href="/tos">Terms of use</a>
        <a className="link link-hover" href="/ppolicy">Privacy policy</a>
        <a className="link link-hover" href="/cpolicy">Cookie policy</a>
      </div>
    </footer>
  )
}