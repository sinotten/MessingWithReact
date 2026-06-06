export default function ContactDashboardSummary(props){
    let name = props.name;
    let birthday = props.birthday;
    
    return(
        <div className="border border-slate-400 border-solid w-full h-fit bg-white rounded-sm shadow-md">
              <div className="flex">
                {/*profile image */}
                <div className="py-2 px-4 w-fit h-full">
                  <div className="w-10 h-10 rounded-full border border-black">
                    {/*profile image here */}
                  </div>
                </div>

                {/*information section*/}
                <div className="h-full w-full mt-auto mb-auto">
                  <div className="w-fit h-fit">
                    <div>
                      <span>{ name }</span>
                    </div>
                    <div>
                      <span>{ birthday }</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}