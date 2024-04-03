当初学习VBA时，不分昼夜，网上看了很多教程，终于进入了VBA编程的大门。

而如今，要跟这些收藏的教程拜拜了。

![捕获](https://docu-1319658309.cos.ap-guangzhou.myqcloud.com/捕获.PNG)

因为有了AI，直接提问CHATGPT，就可以得出编程答案了，想做什么，直接问题，ChatGPT直接给答案。

网上的教程，都没有用了。。不是没用，还是可以参考学习的。只是不是“救命”的了。

---

### 提问：用VBA，批量给文件夹下的所有文件名，添加日期和时间

ChatGPT回答：

下面是一个使用VBA在文件夹中批量添加日期和时间的示例代码：

```vb
Sub AddDateTimeToFiles()
    Dim FolderPath As String
    Dim FileExtension As String
    Dim objFSO As Object
    Dim objFolder As Object
    Dim objFile As Object
    Dim dt As Date
    
    ' 设置文件夹路径和文件扩展名
    FolderPath = "C:\YourFolderPath\" ' 将路径替换为你的文件夹路径
    FileExtension = "*.*" ' 将扩展名替换为你想要处理的文件类型，例如 "*.txt" 表示只处理文本文件
    
    ' 创建文件系统对象
    Set objFSO = CreateObject("Scripting.FileSystemObject")
    
    ' 获取文件夹对象
    Set objFolder = objFSO.GetFolder(FolderPath)
    
    ' 循环处理文件夹中的每个文件
    For Each objFile In objFolder.Files
        ' 检查文件的扩展名
        If objFSO.GetExtensionName(objFile.Name) Like FileExtension Then
            ' 获取当前的日期和时间
            dt = Now()
            
            ' 添加日期和时间到文件名
            RenameFileWithDateTime objFile, dt
        End If
    Next objFile
    
    ' 释放对象
    Set objFile = Nothing
    Set objFolder = Nothing
    Set objFSO = Nothing
    
    MsgBox "处理完成！"
End Sub

Sub RenameFileWithDateTime(objFile As Object, dt As Date)
    Dim NewFileName As String
    Dim FileExtension As String
    
    ' 获取文件的扩展名
    FileExtension = "." & objFSO.GetExtensionName(objFile.Name)
    
    ' 构造新的文件名
    NewFileName = Left(objFile.Name, Len(objFile.Name) - Len(FileExtension)) & _
                  "_" & Format(dt, "yyyymmdd_hhmmss") & FileExtension
    
    ' 重命名文件
    objFile.Name = NewFileName
End Sub
```

请将代码中的`FolderPath`替换为你想要处理的文件夹路径，并将`FileExtension`替换为你想要处理的文件类型的扩展名。然后，在VBA编辑器中运行`AddDateTimeToFiles`子过程。

该代码会遍历指定文件夹中的所有文件，对于每个文件，它会获取当前的日期和时间，并将其添加到文件名中，以"yyyymmdd_hhmmss"的格式命名文件。例如，如果文件名是"example.txt"，并且当前日期和时间为2024年4月2日下午3点15分30秒，则文件将被重命名为"example_20240402_151530.txt"。