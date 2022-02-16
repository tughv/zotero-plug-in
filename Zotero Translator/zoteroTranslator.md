[Zotero Translators](https://www.zotero.org/support/dev/translators)

---

翻译器是 Zotero 最受欢迎的功能之一的核心：它能够从各种格式导入和导出项目元数据。下面我们将介绍翻译人员的工作方式，以及您如何编写自己的内容。

本页介绍翻译器的功能和结构。有关如何编写翻译器代码的深入文档，请参阅[Coding](Coding.md)。

注意：在为网站编写翻译器之前，请查看有关[公开元数据的文档](公开元数据的文档.md)；网站作者应该在尝试编写翻译器之前尝试嵌入必要的元数据。

如果您正在寻找修复损坏的翻译器，请查看[最近的翻译器错误](最近的翻译器错误.md)并检查报告最多的错误之一。您还可以通过查看[翻译器测试概览](翻译器测试预览.md)来检查许多翻译器的状态。

$\underline{Translator Types - Web, Import, Export and Search}$

Zotero 翻译器可以以四种不同的方式操作（请注意，翻译器不一定限于单一类型）：

- [Web translators](Web translators.md)：可以在访问网站时激活。例如。使用 Zotero for Firefox，当翻译人员在加载的网页上找到项目元数据时，Firefox 的地址栏中会出现一个图标。单击此图标将激活翻译器，将项目元数据保存到您的 Zotero 库中。
- [Import translators](Import translators.md)