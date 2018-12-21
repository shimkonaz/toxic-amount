import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from "react-router-dom";

import * as uploadActions from 'store/actions/uploadActions';
import { UploadArrow } from 'components/Icons';
import './UploadArea.scss';

class UploadArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo: null,
      photoLoading: false,
      isHiddenElems: false
    }
  }

  /**
   * FLOW:
   * 1. upload photo
   * 2. show photo preview
   * 3. scan for words
   * 4. save results into redux store
   * 5. redirect to results page
   * 6. show results as list
   * 7. redirect to specific item
  */

  componentWillUnmount() {
    URL.revokeObjectURL(this.state.photo);
  }
  
  handleAreaClick = () => {
    this.inputElement.click();
  }

  redirectTo = (route) => {
    this.props.history.push(route);
  }
  
  handleFileSelection = (e) => {
    this.setState({
      photoLoading: true,
      isHiddenElems: true
    });
    this.storePhotoUrl(e.target.files[0]);
    this.processPhoto(e.target.files[0]);
  }
  
  storePhotoUrl = (photo) => {
    this.setState({
      photo: URL.createObjectURL(photo)
    })
  }

  extractFoundWords = (result) => {
    this.setState({
      photoLoading: false
    });

    return result.words.filter(
      word => 
        word.confidence > 50 
        && word.text.length > 3
      )
    .map(word => word.text);
  }
  
  processPhoto = (photo) => {
    return new Promise(
      (resolve, reject) => {
        window.Tesseract.recognize( photo, { lang: 'eng' } )
      .then(resolve)
      .catch(reject)
    })
    .then(this.extractFoundWords)
    .then(words => this.props.findWordsInPhotoSuccess(words))
    .then(this.redirectTo('/items'))
    .catch(err => this.props.findWordsInPhotoFailure(err))
  }

  render() {
    return (
      <div 
        className="uploadArea"
        onClick={this.handleAreaClick}
        style={{
          backgroundImage: 'url(' + this.state.photo + ')'
        }}>
 
          <div 
            className="loader-container"
            style={{
              visibility: this.state.photoLoading ? 'visible' : 'hidden'
            }}>
            <div className="loader">Loading...</div>
          </div>

        <input
          type="file"
          onChange={this.handleFileSelection}
          ref={input => this.inputElement = input}
          style={{display: 'none'}} />
        
        <div 
          className="uploadArea__icon"
          style={{
            display: this.state.isHiddenElems ? 'none' : 'block'
            }}
          >
          <UploadArrow />
        </div>

        <div 
          className="uploadArea__title"
          style={{
            display: this.state.isHiddenElems ? 'none' : 'block'
            }}
          >
          To upload, click here <br/> or <br/>
           drop files in this area
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findWordsInPhotoSuccess: (words) =>
      dispatch(uploadActions.findWordsInPhotoSuccess(words)),
    findWordsInPhotoFailure: (err) =>
      dispatch(uploadActions.findWordsInPhotoFailure(err))
  }
}

export default connect(null, mapDispatchToProps)(withRouter(UploadArea));
