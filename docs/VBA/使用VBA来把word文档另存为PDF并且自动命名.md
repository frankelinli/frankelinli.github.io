

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

