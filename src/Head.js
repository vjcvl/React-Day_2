export default function Head(){
    return(
        
        <div class="col-md-8 text-center">
        <h3 class="mt-3 font-weight-medium mb-1">Pricing to make your Work Effective</h3>
        <h6 class="subtitle">We offer 100% satisafaction and Money back Guarantee</h6>
        <div class="switcher-box mt-4 d-flex align-items-center justify-content-center">
          <span class="font-14 font-weight-medium">MONTHLY</span>
          <div class="onoffswitch position-relative mx-2">
            <input type="checkbox" name="onoffswitch1" class="onoffswitch-checkbox d-none" id="myonoffswitch1"/>
            <label class="onoffswitch-label d-block overflow-hidden" for="myonoffswitch1">
							<span class="onoffswitch-inner d-block"></span>
							<span class="onoffswitch-switch d-block bg-white position-absolute"></span>
						</label>
          </div>
          <span class="font-14 font-weight-medium">YEARLY</span>
        </div>
      </div>
    
    )
}