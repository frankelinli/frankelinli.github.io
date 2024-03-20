
这是以前的一个python小程序。假如文件夹下有5个PDF文件，他们的名字分别是：

1.  hello
2.  world
3.  nihao
4.  shijie
5.  thankyou

----

把他们合并到成一个jieshao.pdf文件，并且用上面5个文件的名字来作为jieshao.pdf的书签。

:::info

这个函数会遍历要求目录下的所有文件，将以  .pdf 结尾的所有pdf合并成一个新的pdf，并保存在 file_dir 目录下

:::

```python
import os
import os.path
from PyPDF2 import PdfFileReader, PdfFileWriter
import time

##########################找到 filepath 下的所有pdf，将地址返回########################
def getFileName(filepath):
    list1=[]
    for root, dirs, files in os.walk(filepath, topdown=False):
        for name in files:
            if name.endswith(".pdf"):
                list1.append(os.path.join(root, name))
    return list1

##########################合并同一个文件夹下所有PDF文件########################
def MergePDF(filepath, outfile):
    output = PdfFileWriter()
    outputPages = 0
    pdf_fileName = getFileName(filepath)
    for each_file in pdf_fileName:
        print("adding %s" % each_file)
        # 读取源pdf文件
        input = PdfFileReader(open(each_file, "rb"))

        # 如果pdf文件已经加密，必须首先解密才能使用pyPdf
        if input.isEncrypted == True:
            input.decrypt("map")

        # 获得源pdf文件中页面总数
        pageCount = input.getNumPages()
        outputPages += pageCount
        print("%s has %d pages" % (each_file, pageCount))

        # 分别将page添加到输出output中
        for iPage in range(pageCount):
            output.addPage(input.getPage(iPage))

        # 添加书签,以pdf名字命名书签,并且有书签名中带页码范围
        x=outputPages-pageCount  #当前PDF到了第几页
        output.addBookmark(
            title=each_file.split("\\")[-1]+str(x+1)+'-'+str(x+pageCount),pagenum=x)

    print("All Pages Number: " + str(outputPages))
    # 最后写pdf文件
    outputStream = open(os.path.join(filepath, outfile), "wb")
    output.write(outputStream)
    outputStream.close()
    print("finished")


if __name__ == '__main__':
    time1 = time.time()
    # 这里保存pdf文件的目录    
    file_dir =r'C:\Users\frankelin\Documents\湖南醴陵旅游' 
    # 这里保存生成文件的名字
    out = u"jieshao.pdf" 
    #这个函数会遍历要求目录下的所有文件，将以  .pdf 结尾的所有pdf合并成一个新的pdf，并保存在 file_dir 目录下
    MergePDF(file_dir, out)
    time2 = time.time()
    print(u'总共耗时： %.4f s' % (time2 - time1))

```

