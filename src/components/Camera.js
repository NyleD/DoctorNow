import React, { Component } from 'react';
import '../firebase/firebase';
import { OTSession, OTPublisher, OTStreams, OTSubscriber } from 'opentok-react';
import { isNullOrUndefined } from 'util';


class Camera extends React.Component {
  constructor(props) {
    super(props);
 
    this.publisherProperties = {
      audioFallbackEnabled: false,
      showControls: false
    };
 
    this.publisherEventHandlers = {
      streamCreated: event => {
        console.log('Publisher stream created!');
      },
      streamDestroyed: event => {
        console.log('Publisher stream destroyed!');
      }
    };
  }
  
  render() {
    return (
      <OTSession apiKey="46254302" 
      sessionId="1_MX40NjI1NDMwMn5-MTU0Nzk3NjUyNTk1M35YVkRDRTNDZFcwQ29QVXdaa2s3RXREYzZ-fg" 
      token="T1==cGFydG5lcl9pZD00NjI1NDMwMiZzaWc9ZjY0MDM3OTRkOTQxYThlNzk1MzA2MmYwY2JjMzgxYzA0OTRhNjlkMTpzZXNzaW9uX2lkPTFfTVg0ME5qSTFORE13TW41LU1UVTBOemszTmpVeU5UazFNMzVZVmtSRFJUTkRaRmN3UTI5UVZYZGFhMnMzUlhSRVl6Wi1mZyZjcmVhdGVfdGltZT0xNTQ3OTc2ODA2Jm5vbmNlPTAuNzI2MzM0OTEyOTkyNzgwNSZyb2xlPXB1Ymxpc2hlciZleHBpcmVfdGltZT0xNTQ4NTgxNjAyJmluaXRpYWxfbGF5b3V0X2NsYXNzX2xpc3Q9">
        <ul style={{position:"fixed", right:"0", listStyle:"none"}}>
          <li>
            <OTPublisher
              properties={this.publisherProperties}
              eventHandlers={this.publisherEventHandlers}
            />
          </li>
          <li>
            <OTStreams>
              <OTSubscriber/>
            </OTStreams>
          </li>
        </ul>
      </OTSession>
    );
  }
}

export default Camera;
