import $ from 'jquery';
import {parseCode, recParse} from './code-analyzer';
import {prossessLines} from './lineProcessing';


$(document).ready(function () {
    //debug();
    $('#codeSubmissionButton').click(() => {
        let codeToParse = $('#codePlaceholder').val();
        let parsedCode = parseCode(codeToParse);
        let argArr = $('#inputArgs').val();
        let parseProc = recParse(parsedCode, JSON.parse('['+argArr+']'));
        let resultLines = prossessLines(codeToParse,JSON.parse(parseProc[0]),
            JSON.parse(parseProc[1]),JSON.parse(parseProc[2]));
        $('#markedCode').html(resultLines);

    });

});

