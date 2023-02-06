import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
  <div class="mainbox">
    <div class="err">4</div>
    <i class="far fa-question-circle fa-spin"></i>
    <div class="err2">4</div>
    <div class="msg">Maybe this page moved? Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to="/Dashboard">home</Link> and try from there.</p></div>
      </div>      
      )
}
