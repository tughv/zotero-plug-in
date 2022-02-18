{
    "translatorID": "ca1b2b35-fa86-46af-ba94-90323eeb4763",
    "label": "title link quick copy",
    "creator": "emchy",
    "target": "txt",
    "minVersion": "5.0.82",
    "maxVersion": "",
    "priority": 100,
    "inRepository": false,
    "translatorType": 2,
    "browserSupport": "gcsbv",
    "configOptions": {"getCollections": false},
    "displayOptions": {"exportCharset": "UTF-8", "exportNotes": false, "exportFileData": false, "useJournalAbbreviation": false},
    "lastUpdated": "2022-02-14 14:36:52"
}
/*
  MIT License
  Copyright (c) 2020 Guillaume Gaullier
  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/
function doExport() {
    var item;
    while (item = Zotero.nextItem()) {
        if (item.title) {
            var doiLink = item.title;
            Zotero.write(doiLink);
        } else {
            Zotero.write("This item's title field is empty, or this item type does not have a title field.\n");
        }
    }
}
