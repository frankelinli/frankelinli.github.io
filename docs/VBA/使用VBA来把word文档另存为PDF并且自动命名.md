

使用VBA来把word文档另存为PDF，并且自动改成自己想要的文件名.

然后把这个VBA宏，放到word菜单栏，点击以下图标，就会自动执行这个程序。

```vbscript
Sub savetoPDF()

    '转换为PDF,保存到"C:\Users\XXX\Documents\XXX\Records\afID_Onsite_Photos.pdf",导出后打开PDF文件

Dim pdfPath As String

pdfPath = Split(ActiveDocument.Path, "F")(0) & "Records\" & Split(ActiveDocument.Name, "_")(1) & "_Onsite_Photos.pdf"

ActiveDocument.ExportAsFixedFormat pdfPath, wdExportFormatPDF, True


Dim destFolderPath As String   '同时复制onsite photos为"zid_onsite_photos.pdf"

destFolderPath = Split(ActiveDocument.Path, "F")(0)

FileCopy pdfPath, destFolderPath & Split(ActiveDocument.Name, "_")(0) & "_Onsite_Photos.pdf"


'ActiveDocument.ExportAsFixedFormat _
'Split(ActiveDocument.Path, "F")(0) & "Records\" & Split(ActiveDocument.Name, ".")(0) & ".pdf", _
'wdExportFormatPDF, _
'True

End Sub
```

### 代码解读

这段代码是一个在Microsoft Word中执行的宏，用于将当前文档转换为PDF格式，并保存到指定路径。我来帮你解读一下：

1. `Sub savetoPDF()`: 定义了一个名为`savetoPDF`的子过程。
2. `'转换为PDF,保存到"C:\Users\XXX\Documents\XXX\Records\afID_Onsite_Photos.pdf",导出后打开PDF文件`: 这是一个注释，说明了该子过程的功能，即将文档转换为PDF格式并保存到指定路径。
3. `Dim pdfPath As String`: 声明一个名为`pdfPath`的字符串变量，用于存储PDF文件的路径。
4. `pdfPath = Split(ActiveDocument.Path, "F")(0) & "Records\" & Split(ActiveDocument.Name, "_")(1) & "_Onsite_Photos.pdf"`: 这一行代码将构建PDF文件的路径。它使用了`ActiveDocument.Path`来获取当前文档的路径，然后通过`Split`函数将路径分割为部分，并根据一些特定的标记来构建PDF文件的路径。
5. `ActiveDocument.ExportAsFixedFormat pdfPath, wdExportFormatPDF, True`: 这一行代码执行文档到PDF的转换，使用了`ExportAsFixedFormat`方法，并传递了PDF文件的路径、PDF格式的常量`wdExportFormatPDF`以及`True`作为参数，表示在导出后打开PDF文件。
6. `Dim destFolderPath As String`: 声明一个名为`destFolderPath`的字符串变量，用于存储目标文件夹的路径。
7. `destFolderPath = Split(ActiveDocument.Path, "F")(0)`: 这一行代码构建了目标文件夹的路径，同样使用了`ActiveDocument.Path`来获取当前文档的路径，并通过`Split`函数来提取文件夹的路径。
8. `FileCopy pdfPath, destFolderPath & Split(ActiveDocument.Name, "_")(0) & "_Onsite_Photos.pdf"`: 这一行代码复制了之前创建的PDF文件到目标文件夹，并根据文档名称的一部分来命名新的PDF文件。
9. 注释掉的部分是一个备用的导出PDF的代码段，但目前被注释掉了，所以不会执行。

总体来说，这个宏的功能是将当前Word文档转换为PDF格式，并保存到指定路径，并且复制生成的PDF文件到另一个指定的文件夹。
