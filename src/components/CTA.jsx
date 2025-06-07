const CTA = () => {
  return (
    <div className='cta'>
      <a
        className='btn'
        href='https://drive.google.com/file/d/12vwFoqyt7xXKFex0THEAA-3pnePve9-r/view'
        target='_blank'
        rel='noopener noreferrer'>
        View CV
      </a>
      <a
        className='btn'
        target='_blank'
        href='https://drive.google.com/uc?export=download&id=12vwFoqyt7xXKFex0THEAA-3pnePve9-r'
        download>
        Download CV
      </a>
      <a href='#contact' className='btn btn-primary'>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
