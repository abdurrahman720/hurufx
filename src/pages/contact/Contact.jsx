import { Copy, Envelope, WhatsappLogo } from '@phosphor-icons/react';
import contact from '../../assets/contact/contact.jpg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useEffect, useState } from 'react';

const ContactUs = () => {
  const [copiedText, setCopiedText] = useState('');

  useEffect(() => {
    if (copiedText) {
      const timer = setTimeout(() => {
        setCopiedText('');
      }, 1000); // Clear the message after 3 seconds

      return () => clearTimeout(timer); // Clean up the timer on unmount
    }
  }, [copiedText]);

  return (
    <div className='relative'>
      <iframe
        title='Google Map'
        src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7967.108211598698!2d101.5764422!3d3.2110807!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc478a74d8757f%3A0xab5f9be343574117!2sThe%20Dune%20%40%20Light%20Grey!5e0!3m2!1sen!2sbd!4v1726804662476!5m2!1sen!2sbd'
        width='100%'
        height='800'
        allowFullScreen=''
        loading='lazy'
        className='mt-32'
      ></iframe>

      {/* <div className="fixed top-0 h-80 w-full bg-gradient-to-b to-transparent via-transparent from-black/50"></div> */}
      <div className='md:flex gap-10 bg-white items-center'>
        <img src={contact} alt='contact-image' className='md:w-1/2 flex-1' />
        <div className='md:w-1/2 flex flex-col p-5 md:p-0'>
          {/* <div className="w-full px-4">
            <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
            <p className="mb-4">
              Block A-05-08, Oasis Square, 2, Jln PJU 1A/7, <br />
              Oasis Ara Damansara, 47301 Petaling Jaya, <br />
              Selangor
            </p>
            <div className="w-full"></div>
          </div> */}
          <div className=''>
            <h2 className='text-3xl font-bold mb-5'>Get in touch with us</h2>
            <div className='flex flex-col gap-5'>
              <div className=''>
                <h3 className='text-xl font-semibold'>
                  Marketing (m): NICHOLAS T.
                </h3>
                <div className='flex gap-1 items-center'>
                  <WhatsappLogo weight='fill' className='' />
                  <a href='https://wa.me/+60176661994' className=''>
                    +60176661994
                  </a>
                  <CopyToClipboard
                    text='+60176661994'
                    onCopy={() => setCopiedText('+60176661994')}
                  >
                    <button className='ml-2'>
                      <Copy className='w-5 h-5 text-gray-600 hover:text-gray-800' />
                    </button>
                  </CopyToClipboard>
                </div>
                <div className='flex gap-1 items-center'>
                  <Envelope weight='fill' className='' />
                  <a href='mailto:nicholas@huruf.gg' className=''>
                    nicholas@huruf.gg
                  </a>
                  <CopyToClipboard
                    text='nicholas@huruf.gg'
                    onCopy={() => setCopiedText('nicholas@huruf.gg')}
                  >
                    <button className='ml-2'>
                      <Copy className='w-5 h-5 text-gray-600 hover:text-gray-800' />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold'>
                  Digital (x): MAHATHIR K.
                </h3>
                <div className='flex gap-1 items-center'>
                  <WhatsappLogo weight='fill' className='' />
                  <a href='https://wa.me/+601121743965' className=''>
                    +601121743965
                  </a>
                  <CopyToClipboard
                    text='+601121743965'
                    onCopy={() => setCopiedText('+601121743965')}
                  >
                    <button className='ml-2'>
                      <Copy className='w-5 h-5 text-gray-600 hover:text-gray-800' />
                    </button>
                  </CopyToClipboard>
                </div>
                <div className='flex gap-1 items-center'>
                  <Envelope weight='fill' className='' />
                  <a href='mailto:mahathir@huruf.gg' className=''>
                    mahathir@huruf.gg
                  </a>
                  <CopyToClipboard
                    text='mahathir@huruf.gg'
                    onCopy={() => setCopiedText('mahathir@huruf.gg')}
                  >
                    <button className='ml-2'>
                      <Copy className='w-5 h-5 text-gray-600 hover:text-gray-800' />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
              <div>
                <h3 className='text-xl font-semibold'>
                  Engagement (e): ELAINE B.
                </h3>
                <div className='flex gap-1 items-center'>
                  <WhatsappLogo weight='fill' className='' />
                  <a href='https://wa.me/+60165187257' className=''>
                    +60165187257
                  </a>
                  <CopyToClipboard
                    text='+60165187257'
                    onCopy={() => setCopiedText('+60165187257')}
                  >
                    <button className='ml-2'>
                      <Copy className='w-5 h-5 text-gray-600 hover:text-gray-800' />
                    </button>
                  </CopyToClipboard>
                </div>
                <div className='flex gap-1 items-center'>
                  <Envelope weight='fill' className='' />
                  <a href='mailto:elaine@huruf.gg' className=''>
                    elaine@huruf.gg
                  </a>
                  <CopyToClipboard
                    text='elaine@huruf.gg'
                    onCopy={() => setCopiedText('elaine@huruf.gg')}
                  >
                    <button className='ml-2'>
                      <Copy className='w-5 h-5 text-gray-600 hover:text-gray-800' />
                    </button>
                  </CopyToClipboard>
                </div>
              </div>
            </div>
            {copiedText && (
              <p className='text-green-500 mt-2'>Copied: {copiedText}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
