import ImagePopupButton from '../src/pages/pop'

请帮我使用@material-ui/core，帮我封装一个react组件，目的是在需要用到的位置，插入一个按钮，点击按钮，就会弹出一个图片。

<ImagePopupButton />

---



当然，我可以帮您封装一个使用@material-ui/core的React组件，用于在需要的位置插入一个按钮，并在点击按钮时弹出一张图片。以下是一个示例代码：

jsx

Copy

```jsx
import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Image from './your-image-path.jpg'; // 替换为您的图片路径

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
          <img src={Image} alt="图片" style={{ width: '100%' }} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ImagePopupButton;
```

以上代码定义了一个名为`ImagePopupButton`的组件，它使用了`@material-ui/core`中的`Button`、`Dialog`、`DialogTitle`和`DialogContent`组件。当点击按钮时，会打开一个对话框，其中包含指定路径的图片。

请注意，您需要将`import Image from './your-image-path.jpg';`这一行替换为您实际图片的路径。确保将图片文件放在与该组件文件相同的目录中或者根据实际情况调整路径。

您可以在其他React组件中使用`<ImagePopupButton />`标签来插入这个按钮，并在需要的位置显示图片弹出框。

---

在需要使用的地方，插入

```<ImagePopupButton />```