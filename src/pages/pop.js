import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Image from '/img/logo.png'; // 替换为您的图片路径

const ImagePopupButton = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        点击查看图片
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>图片预览</DialogTitle>
        <DialogContent>
          <img src={Image} alt="图片" style={{ width: '10%' }} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImagePopupButton;