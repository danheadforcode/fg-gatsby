import React from 'react'

class EventsList extends React.Component {
  render() {
return (
<div class="db dt-ns mw9 center">
	@foreach(var item in selection){
		<div className="w-50-l w-50-l">
            <div className="pa3 pa3-m">
                @{
                    var mediaId = item.GetPropertyValue<string>("headlineImage");
                    var mediaNode = Umbraco.TypedMedia(mediaId);
                    var mediaPageUrl = item.Url;
                    
                    if(mediaNode != null)
                    {
                        <a href="@mediaPageUrl"><img src="@mediaNode.Url" alt="@mediaNode.Name" /></a>
                    }
                }
            </div>
        </div>
	}
		
</div>
<div className="fl-r w-50">
    <div className="pa3 pa3-m">
    </div>
</div>

  }
}
)
export default EventsList