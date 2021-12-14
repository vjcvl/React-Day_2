export default function Card(props){
  if(props.info.isPopular){
    return(
      <div class="col-lg-3 col-md-6" style={{height :'300px'},{width : '250px'}}>
      <div class="card text-center card-shadow on-hover border-0 mb-4">
        <div class="card-body font-14">
        <span class="badge badge-inverse p-2 position-absolute price-badge font-weight-normal">Popular</span>
          <h5 class="mt-4 mb-1 font-weight-medium">{props.info.plan}</h5>
          <h6 class="subtitle font-weight-normal">For Team of {props.info.TeamMembers} Members</h6>            <div class="pricing my-3">
            <sup>$</sup>
       
            <span class="monthly display-5">{props.info.price}</span>
            <small class="monthly">/mo</small>
            <span class="d-block">Save <span class="font-weight-medium">{props.info.discount}</span> a Year</span>
          </div>
          <ul class="list-inline"style={{height:'200px'}}>
            {props.info.Description.map(ele => {
                if(ele.enable){
                  return <li class="d-block py-2">{ele.text}</li>     
                }
                else{
                  return <li class="d-block py-2">{ele.enable}</li>
                }
            }
          
          
          
            )}
      
          </ul>
          <div class="bottom-btn">
          <a class="btn btn-danger-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
          </div>
        </div>
      </div>
    </div>
  )
  }
   else{
    return(
      
      <div class="col-lg-3 col-md-6" style={{height :'300px'},{width : '280px'}}>
      <div class="card text-center card-shadow on-hover border-0 mb-4">
        <div class="card-body font-14">
        
          <h5 class="mt-4 mb-1 font-weight-medium">{props.info.plan}</h5>
          <h6 class="subtitle font-weight-normal">For Team of {props.info.TeamMembers} Members</h6>            <div class="pricing my-3">
            <sup>$</sup>

            <span class="monthly display-5">{props.info.price}</span>
            
            <small class="monthly">/mo</small>
            
          
            <span class="d-block">Save <span class="font-weight-medium">{props.info.discount}</span> a Year</span>
          </div>
          <ul class="list-inline" style ={{height : '200px'}}>
            {props.info.Description.map(ele => {
                if(ele.enable){
                  return <li class="d-block py-2">{ele.text}</li>     
                }
                else{
                  return <li class="d-block py-2">{ele.enable}</li>
                }
            }
          
          
          
            )}
      
          </ul>
          <div class="bottom-btn">
            <a class="btn btn-success-gradiant btn-md text-white btn-block" href="#f1"><span>Choose Plan</span></a>
          </div>
        </div>
      </div>
    </div>
  )
   } 
}