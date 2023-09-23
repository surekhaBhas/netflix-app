import {useState} from 'react'
import './Homepage.css';
import {FaChevronRight} from 'react-icons/fa'
import useAuth from '../../hooks/useAuth';
import {Link,useNavigate} from 'react-router-dom';
import useLogout from '../../hooks/useLogout'
function HomePage() {
  const {auth}=useAuth()
  const logout=useLogout()
  const navigate=useNavigate()
  const [email,setEmail]=useState('')
  const [errMsg,setErrMsg]=useState('')
  const signOut=async()=>{
        await logout();
        navigate('/signIn')
  }

  const getStarted=()=>{
    if(email===auth.email){
      navigate('/movies')
    } else{
      setErrMsg('Enter Correct Email')
    }
  }
  return (
    <div className="main-container">
     <div className="bg-container container-fluid">
            <header className="row">
                <nav className="nav-container col">
                    <div>
                        <svg viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="default-ltr-cache-mv4tc2 eaitdun1" height="40px" width="140px" fill="red"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg>
                    </div>
                    <div className="selection-container">  
                        <div className="selected-tag">
                            <i className=" fa-globe fa-solid text-light "></i>
                        <select>
                            <option>English</option>
                            <option>हिंदी</option>
                        </select>
                        </div>
                        {auth.email?<button className="btn btn-danger" style={{backgroundColor:"red"}} onClick={signOut}>Sign Out</button>:
                       <Link to='signIn'> <button className="btn btn-danger" style={{backgroundColor:"red"} }>Sign In</button></Link>}
                        
                        </div> 
                </nav>
            </header>
            
           <section  className="home-page-body">
             <h1>Unlimited movies, TV shows and more</h1>
            <p>Watch anywhere. Cancel anytime</p>
            <p>Ready to watch? Enter your email to create or restart your membership</p>
            <form className="email-container">
            <input type="email" placeholder="Email address"  onChange={(e)=>{setEmail(e.target.value)}}/>
            <button onClick={getStarted}>Get Started <FaChevronRight/></button>  
            <p style={{color:"white",textAlign:"center"}}>{errMsg}</p>
            </form>            
           </section>
           </div>
           <div className="bg-container2 container-fluid">
              <div className="about-tv">
                <h1 className="text-light">Enjoy on your TV</h1>
                <p className="text-light">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple Tv, Blu-ray players and more</p>
              </div>
              <div className="video-container">
                <img className="tv" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="Tv"/>
                    <video width="100%" height="100%" className="video" controls autoPlay loop muted>
                    <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v" type="video/mp4" />
                    </video>
              </div>
           </div>
           <div className="bg-container-3">
            <div className="download-content">
                <h3>Download your shows to watch offline</h3>
                <p>Save your favourites easily and always have something to watch</p>
            </div>
              <div className="media">
                <div>
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" width="90%" height="auto" alt="stranger-things"/>
                </div>
                <div className="download-container">
                    <div className="download">
                        <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" width="40px" height="50px" alt="download"/>
                        <div>
                            <span>Stranger Things</span>
                            <span>Downloading...</span>
                        </div>
                        <div className="animation"></div>
                    </div>
                </div>
              </div> 
           </div>
           <div className="bg-container2 container-fluid">
            <div className="about-tv">
              <h1 className="text-light">Watch everywhere</h1>
              <p className="text-light">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV</p>
            </div>
            <div className="video-container">
              <img className="tv" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" alt="Tv"/>
                  <video width="100%" height="auto" className="video1" controls autoPlay loop muted>
                  <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v" type="video/mp4" />
                  </video>
            </div>
         </div>
         <div className="bg-container2 container-fluid">
            <div className="about-tv">
              <h1 className="text-light">Create profiles for kids</h1>
              <p className="text-light">Send children on adventures with their favourite characters in a space made just for them--free with your membership</p>
            </div>
            <div className="image-container">
              <img width="100%" height="auto" src="https://occ-0-2085-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="kids"/> 
            </div>
         </div>
         <div className="faq-container">
              <h1>Frequently Asked Questions</h1>
              <div className="questions">
                <div className="question">
                  <input type="checkbox" id="q1"/>
                  <label className="header" htmlFor="q1">
                      <span>What is Netflix</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      
                  </label>
                  <div className="answer">
                    Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                    You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                  </div>

                </div>
                <div className="question">
                  <label className="header">
                      <span>How much does Netflix cost?</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </label>
                  <div className="answer">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                  </div>

                </div>
                <div className="question">
                  <label className="header">
                      <span>Where can I watch?</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </label>
                  <div className="answer">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                  </div>

                </div>
                <div className="question">
                  <label className="header">
                      <span>Where can I cancel?</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </label>
                  <div className="answer">
                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                  </div>

                </div>
                <div className="question">
                  <label className="header">
                      <span>What can I watch on Netflix?</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </label>
                  <div className="answer">
                    Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                  </div>
                </div>
                <div className="question">
                  <label className="header">
                      <span>Is Netflix good for kids?</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </label>
                  <div className="answer">
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                    Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                  </div>
                </div>
              </div>
              <p>Ready to watch? Enter your email to create or restart your membership.</p>
              <form className="email-container">
                <input type="email" placeholder="Email address"  onChange={(e)=>{setEmail(e.target.value)}} />
                <button onClick={getStarted}>Get Started <FaChevronRight/></button>  
                <p style={{color:"white",textAlign:"center"}}>{errMsg}</p>
                </form> 
         </div>
    </div>
  )
}

export default HomePage
