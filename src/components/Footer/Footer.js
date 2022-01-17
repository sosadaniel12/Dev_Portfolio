import './Footer.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'

const Footer = () => {
  const { social } = about

  return (
    <footer className='footer'>
      {social && (
        <>
          {social.github && (
            <a href={social.github} aria-label='github'>
              <GitHubIcon fontSize='large' className='icon' />
            </a>
          )}

          {social.linkedin && (
            <a href={social.linkedin} aria-label='linkedin'>
              <LinkedInIcon fontSize='large' className='icon' />
            </a>
          )}
        </>
      )}
    </footer>
  )
}
export default Footer
