// import logo from './logo.svg';
import './App.css';
import logo from './image/logo.png';
import one from './image/1.png';
import picture1 from './image/1-1.png';
import picture2 from './image/1-2.png';
import picture3 from './image/1-3.png';
import picture4 from './image/1-4.png';
import picture5 from './image/1-5.png';
import picture6 from './image/1-6.png';
import people from './image/people.png';
import picture7 from './image/7.png';
import picture8 from './image/8.png';
import picture9 from './image/9.png';
import picture10 from './image/10.png';
import ReactPlayer from 'react-player';

import { Button } from 'react-bootstrap';
function App() {






  return (
    <div className="App">
      <div style={{margin:'0px 100px'}}>
        <div className="wrapper" style={{display:'flex',justifyContent: 'space-between',width:'95%',alignItems: 'center',}}>
          <div clsssName="container" style={{display:'flex',alignItems: 'center',}}>
            <img style={{width:'50px',margin:'15px',}} src={logo}></img>
            <div>Talent Solutions</div>
          </div>
        

          <div className="wrapper" style={{tableLayout:'fixed',border: '1px solid',color:'#0084bf',padding:'3px 8px',fontFamily: 'inherit',}}>
            <button style={{fontSize: '0.8rem',fontWeight: '600',color: '#0084bf',fontFamily: 'inherit',background:'white',border:'0px',borderRadius: '2px',}}>Post a free job</button>
          
          </div>
        
        </div>
      </div>

      <div style={{borderTop: '2px solid #0179b6'}}>
        <div className="box-1" style={{display: 'flex',backgroundColor: '#faebd3',justifyContent: 'center',}}>
          <div className="sitetitle" style={{flexDirection: 'column',display:'flex',justifyContent: 'center',height: '400px',color: 'rgba(0,0,0,0.85)',}}>
            <div clssName="title" style={{marginTop:'40px',fontSize:'60px',}}>LinkedIn Jobs</div>
            <div style={{fontSize:'20px',marginTop:'50px',}}>Talk to the right people. Hire the right <br></br>people.</div>

            <button style={{fontFamily: 'inherit',width:'150px',marginTop:'40px',border:'0px',padding:'16px',backgroundColor:'#0173b1',color:'white',borderRadius:' 2px',}}>Post a free job</button>


           

          </div>
          <div className="videobox"> 
            <div>
            <iframe  src="https://www.youtube.com/embed/_nUekI_r37A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div> 
        </div>
      </div>

      <div style={{margin:'0px 100px',display:'flex',justifyContent:'space-arround',padding:'32px',}}>
        <div>
          <div className="title2">
            <div>Why post a job on LinkedIn?</div>
            <p className="text">Simple tools like screening questions and candidate rating help you quickly filter<br></br> and prioritize only the most qualified candidates—so you can find the <br></br>  people you want to interview, faster.</p>
          </div>

        </div>

        <div style={{justifyContent:'space-arround',marginRight:'50px',}}>
          <div style={{fontSize:'150px',fontFamily: 'Tahoma',color: 'green'}}>
            <img style ={{width:'15vw'}} src= {one}></img>
          </div>
          <div className="text2">
            <p>rated in increasing the quality of hire.*</p>
            <p>Source: LinkedIn Data (Global)</p>

          </div>
  

        </div>
      </div>

      <div style={{top:'50px',margin:'0px 100px',justifyContent:'space-arround',display:'flex',marginTop:'30px',color: 'rgba(0,0,0,0.85)',}}>
        <div style={{marginRight:'20px',}}>
          <img style={{width:'25vw',}}src={picture1} ></img>
          <div style={{marginTop:'30px',}}>Post a job to reach the right people. </div>
          <div>Create a job post in minutes to tap into a network <br></br>of over 770 million professionals. Share that you're<br></br> hiring, with your network and beyond, to get<br></br> qualified candidates with the skills and experience<br></br> you need. </div>

        </div>

        <div style={{marginRight:'20px',}}>
          <img style={{width:'25vw',}}src={picture2}></img>
          <div style={{marginTop:'30px',}}>Find your best matches.</div>
          <div>Get quickly matched with only the most qualified<br></br> candidates. That’s because LinkedIn goes beyond<br></br> the resume and uses insights from your job post,<br></br> your company, and our member profiles to find <br></br>the people that meet your needs best.</div>
        </div>

        <div>
          <img style={{width:'25vw',}}src={picture3}></img>
          <div style={{marginTop:'30px',}}>Get to the right interviews.</div>
          <div>Screen for your must-have qualifications, rate key<br></br> applicant skills, and manage jobs all in one place.<br></br> LinkedIn makes it easy to talk to — and hire — the<br></br> right people for your job.</div>
        </div>
      </div>

      <div style={{display:'flex',justifyContent:'center',alignItems: 'center',marginTop:'100px',}}>
  
        <button style={{justifyContent:'center',fontSize:'15px',fontFamily: 'inherit',border:'0px',padding:' 15px 28px',backgroundColor:'#0173b1',color:'white',borderRadius: '2px' }}>Post a free job</button>
      </div>

      <div className="more" style={{margin:'120px',backgroundColor:'nsparent',justifyContent:'center',alignItems: 'center',marginTop:'100px',}}>
        <div className="mareSmall" style={{display:'flex',justifyContent:'center',alignItems: 'center',}}>More small businesses say LinkedIn Jobs is better at recommending your job</div>
        <div className="mareSmall" style={{display:'flex',justifyContent:'center',alignItems: 'center',}}>to candidates with the right skills & experiences*</div>
        <div className="small" style={{display:'flex',justifyContent: 'center',}}>*Based on the results of a head-to-head survey of SMBs against a top competitor by Chadwick Martin Bailey, Inc. in 2020</div>
      </div>
      
      <div style={{margin:'0px 120px',marginTop:'30px',color: 'rgba(0,0,0,0.85)',}}>
        <div  style={{display:'flex',justifyContent:'center',alignItems: 'center',color: 'rgba(0,0,0,0.85)',fontSize: '42px',fontFamily:'self',}}>How it works</div>
        <div style={{display:'flex',marginTop:'60px',lineHeight: '28px',justifyContent:'center',}}>
          <div style={{fontColor: 'rgba(0,0,0,0.7)',fontFamily: 'self',}}>
            <div style={{fontSize:'20px',}}>Post your job</div>
            <div style={{fontSize:'18px',marginTop:'20px',}}>Tell us what you’re looking for with easy-to-use<br></br> job description templates and LinkedIn will<br></br> find relevant candidates.</div>
          </div> 
          <img style={{width:'48vw',}}src={ picture4}></img>
        </div>
        <div style={{justifyContent:'space-around',margin:'70px 0px',display:'flex',marginTop:'30px',color: 'rgba(0,0,0,0.85)',}}>
          <img style={{width:'48vw',}}src={picture5}></img>
          <div style={{marginLeft:'30px',}}>
            <div style={{fontSize:'25px',}}>Get in front of the right people</div>
            <div style={{marginTop:'30px',fontSize:'20px',lineHeight:'30px',}}>Your job post can be promoted in prominent placements such as emails, across LinkedIn,<br></br> and mobile push notifications, making it easier<br></br> for qualified candidates to find your job and<br></br> apply.</div>
          </div>
        </div>
        <div>
          <div className="Review" style={{margin:'0px 0px',display:'flex',}}>
            <div>
             <div style={{fontSize:'25px',}}>Review and rate the best matches</div>
              <div style={{marginTop:'30px',fontSize:'20px',lineHeight:'30px',}}>As applicants come in, it’s easy to see and organize them all in one place. Filter, sort, and rate your applicants so you can focus your energy and outreach on the best ones. </div>
            </div>
            <img style={{width:'48vw',}} src={picture6}></img>

          </div>

         
        </div>

        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems: 'center',marginTop:'50px',}}>
          <div className="mareSmall">Find the people you want to interview with LinkedIn Jobs.</div>
          <button style={{fontFamily: 'inherit',width:'150px',border:'0px',padding:'8px',backgroundColor:'#0173b1',color:'white',lineHeight:'30px',fontSize:'15px',fontWeight:'30px',borderRadius: '2px' }}>Post a free job</button>
        </div>
      </div>

      {/* Get 3x */}
      <div style={{background:'#fff',margin:'100px 0px',marginTop:'100px',justifyContent:'center'}}>
        <div className="get" style={{display:'flex',justifyContent:'center',alignItems: 'center',}}>Get 3x more qualified applicants when </div>
        <div className="get" style={{display:'flex',justifyContent:'center',alignItems: 'center',}}>you pay to promote your job</div>
        <div style={{display:'flex',margin:'100px 150px',marginTop:'100px',justifyContent:'space-arround',}}>
          <div>
            <div className="s">Set a budget</div>
            <div className="p">Post a job for free, or set a budget to <br></br>increase your job’s promotion — and <br></br>decrease the time it takes to find that <br></br>right person.</div>

          </div>
          <div style={{marginLeft:'40px'}}>
            <div className="s">Control your spend</div>
            <div className="p">Easily edit your budget, and <br></br>automatically pause spend whenever<br></br> you want. Plus, only pay when people <br></br>click on your job post.</div>

          </div>
          <div style={{marginLeft:'40px'}}>
            <div className="s">Pay a fair rate</div>
            <div className="p">Dynamic pricing is based on the role <br></br>you’re hiring for, so you always pay the<br></br> market rate, not a marked-up fixed fee.</div>

          </div>

        </div>


      </div>

      {/* LinkedIn */}
      <div style={{margin:'0px 120px',display:'flex',justifyContent:'flex-start'}}>
        <img style={{width:'13vw',marginLeft:'60px'}} src={people}></img>
        <div className="lin"style={{marginLeft:'100px',direction:'column'}}>“LinkedIn Jobs is the most effective way to find<br></br> the right people, fast.”
          <div className="d" style={{marginTop:'30px',}}>Diliana Alexander</div>
          <div className="e">Executive Direchtor at FilmGate</div>
        </div>
     
      </div>

      {/* Recommend */}
      <div className="Recommend"style={{margin:'0px 120px',display:'flex',justifyContent:'center',marginTop:'100px',padding:'24px 0'}}>  
        <div>Recommended resources</div>
      </div>
      <div style={{margin:'0px 120px',display:'flex',marginTop:'30px',color: 'rgba(0,0,0,0.85)',justifyContent:'center',alignItems: 'center',marginTop:'100px'}}>
      
        <div>
          <img style={{width:'22vw',}}src={picture7}></img>
          <div className="jo">7 job description tips to attract more <br></br>applicants</div>
          
        </div>

        <div style={{marginLeft:'50px'}}>
        <img style={{width:'22vw',}}src={picture8}></img>
          <div className="jo">3 steps for writing more compelling job <br></br>ads that will ‘hook’ people quickly</div>
         
        </div>

        <div style={{marginLeft:'50px'}}>
        <img style={{width:'22vw',}}src={picture9}></img>
          <div className="jo">Small business resources: Discover<br></br> articles, tips & learning courses to grow<br></br> your business.</div>
          
        </div>

      </div>

      {/* under */}
      
      <div className="under"style={{position: 'relative',borderTop: '2px solid rgba(0,0,0,0.15)',display:'flex',justifyContent:'center',alignItems: 'center',}}>
        <img style={{width:'5vw'}}src={picture10}></img>
        <div style={{marginLeft: '10px'}}>© LinkedIn Corporation 2022</div>
        <div style={{marginLeft: '24',fontWeight:'600'}}>About</div>
        <div style={{marginLeft: '24',fontWeight:'600'}}>Cookie Policy</div>
        <div style={{marginLeft: '24',fontWeight:'600'}}>Privacy Policy</div>
        <div style={{marginLeft: '24',fontWeight:'600'}}>User Agreement</div>
        <div style={{marginLeft: '24',fontWeight:'600'}}>Accessibility</div>
        <div style={{marginLeft: '24',fontWeight:'600'}}>Sitemap</div>
      </div>

      <div style={{display:'flex',}}>
        
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    
    </div>
  );
}

export default App;
