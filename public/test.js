var suggBoxSel = null,
  searchBoxSel = null,
  searchForm = null,
  queryString = null,
  newSearchText = null;
$(function() { 
if(document.querySelector('.siteSearchForm')){
    document.querySelector('.siteSearchForm').addEventListener('submit', function (e) {
        e.preventDefault();

        var queryStr= null,
          actionUrl= null,
          formStatus= null,
          formName= null,
          formContent = null,
          advanceSearchUrl = null;

        $searchForm = $(this);
        // Serialize and encode all form fields
        queryStr = $searchForm.serialize();
        queryStr = encodeURI(queryStr);
        // Replace single quote manually since encoding won't encode it
        queryStr = queryStr.replace(/'/ig,'%27');

        if($("#advanceSearchUrl").length > 0) {
            advanceSearchUrl = $("#advanceSearchUrl").val();
            actionUrl = advanceSearchUrl;
            queryStr = encodeURIComponent($searchForm.find("#searchInput").val());
            } else{
                // Redirect to search results page
                actionUrl= $searchForm.attr("action") + "?";
            }

            if($("#advanceSearchUrl").length > 0) {
               formName= "advanced dealer search";
               formContent = $searchForm.find("#searchInput").val();
                } else if($searchForm.attr("id")=== "search"){
                  formName= "global search";
                  formContent = $searchForm.find("#searchInput").val();
                } else {
                  formName= "search results page form";
                  formContent = $searchForm.find("#globalSearchInput").val();
                }

        if($searchForm.attr("action")!==null && $searchForm.attr("action").trim().length>0){
          formStatus="Success";
        } else {
          formStatus = "Fail";
        }

        dataLayer.push({
          'event': 'formSubmitted',
          'pagePath': document.location.pathname,
          'formName': formName,
          'formContent': formContent,
          'formContent2': '',
          'formStatus': formStatus
        });
            newSearchText = formContent;
            resetFilters();
            if($("#advanceSearchUrl").length > 0) {
                var lang = "&lang=" + getLanguageForSuggestions(location.pathname);
                window.open(actionUrl + queryStr + lang);
            } else {
                window.location.href = actionUrl + queryStr;
            }
        });
}
      // items moved from global.js
      $('nav >ul >li.menu >a, nav >ul >li.menu >ul >li >a').on('mouseover', function() {
        $('nav li.search').removeClass('active');
      });

      /* click handler for search */
      $('nav >ul >li.search >a').on('click', function(e) {
        e.preventDefault();
        $(this).parent().siblings().removeClass('active'); // close all other menus on the same level
        $(this).parent().toggleClass('active'); // open this menu
        if ($('body').data('is-mobile')) { // mobile only
          //forceWeebkitReDraw called
          $("body").hide();
          // eslint-disable-next-line no-unused-expressions
          $("body").get(0).offsetHeight;
          $("body").show()
        }
        $('input[type="search"]').focus();
      });

      $('nav >ul >li.search >a').on('click', function() {
        $(this).find('i').toggleClass('icon-globalassets-search icon-globalassets-close');
      });

      /* close search when click anywhere on the body */
      $(document).on('click', function(event) {
        var $trigger = $(this).find('li.search');
        if($trigger !== event.target && !$trigger.has(event.target).length){
          $trigger.removeClass('active');
          $trigger.find('a>.icon-globalassets-close').toggleClass('icon-globalassets-close icon-globalassets-search');
        }
      });
      //end

    });

/**
* Returns the current page Language
* @param {String} pathnamme Current pathname
*/
function getLanguageForSuggestions(pathname) {
  var languageRegex = /[a-z]{2}_[A-Z]{2}/,
  isValid = !!pathname && !!pathname.match(languageRegex);

  if (isValid) {
    return pathname.match(languageRegex)[0];
  } else if (typeof $('html').attr('lang') !== 'undefined' ) {
    return $('html').attr('lang');
  }

  return 'en_US';
}

/*  Display dropdown of suggested keywords based keystroke */
// eslint-disable-next-line no-unused-vars
function youAutocompleteMe(searchInputEl, parent, url) {
  var jqInputEl = $(searchInputEl),
    searchTerm =null,
    suggBox = null,
    val = null;

  if($('.focused-search__input').length>0){
    $('.focused-search__input').removeClass('focusSearchClicked');
  }

  /* Check if at least 3 characters in search box */
  searchTerm = jqInputEl.val();
  if (searchTerm.length < 3) {
    $(suggBoxSel).empty();
    $(suggBoxSel).hide();
    return;
  }

  /*  Build box to display list of suggestions  */
  suggBoxSel = '#' + parent + searchInputEl.id + 'SuggBox';
  if(!$(suggBoxSel).length){
    suggBox = searchInputEl.parentNode.appendChild(document.createElement('div'));
    suggBox.id = parent + searchInputEl.id + "SuggBox";
    suggBoxSel = '#' + parent + searchInputEl.id + 'SuggBox';
  }
  $(suggBoxSel).attr('class','suggBox')
    .css({top: jqInputEl.parent("form").innerHeight(), left: '-1px'})
    .width(jqInputEl.parent("form").outerWidth()-1);

  val = searchInputEl.value;
  searchBoxSel = '#' + parent + ' #' + searchInputEl.id;

  /*  Call search engine for list of suggestions  */
  if (val && val.length > 0){
    $.getScript(url + encodeURIComponent(val));
    $(suggBoxSel).show();
  }
  else{
    $(suggBoxSel).hide();
  }
}

function newSearchAutoSuggestHeader(searchInputEl, parent) {
  var newSearchUrl = $("#pagePath").val() + '.newSearchServlet.html',
      jqInputEl = $(searchInputEl),
      searchTerm = null,
      suggBox = null,
      val = null,
      language;

  /* Check if at least 3 characters in search box */
  searchTerm = jqInputEl.val();
  if (searchTerm.length < 3) {
    return;
  }

  if($('.focused-search__input').length>0){
    $('.focused-search__input').removeClass('focusSearchClicked');
  }

  /*  Build box to display list of suggestions  */
  suggBoxSel = '#' + parent + searchInputEl.id + 'SuggBox';
  if(!$(suggBoxSel).length){
    suggBox = searchInputEl.parentNode.appendChild(document.createElement('div'));
    suggBox.id = parent + searchInputEl.id + "SuggBox";
    suggBoxSel = '#' + parent + searchInputEl.id + 'SuggBox';
  }
  $(suggBoxSel).attr('class','suggBox')
    .css({top: jqInputEl.parent("form").innerHeight(), left: '-1px'})
    .width(jqInputEl.parent("form").outerWidth()-1);

  val = searchInputEl.value;
  searchBoxSel = '#' + parent + ' #' + searchInputEl.id;

  language = getLanguageForSuggestions(location.pathname);

    /*  Call search engine for list of suggestions  */
  queryString = "searchText=" + searchTerm + '&start=0&rows=10&type=autoSuggest&language=' + language;
  $.ajax({
    type : "POST",
    url : newSearchUrl,
    data : queryString,
    success : function(data) {

      if (data) {
        var highlightingData = Object.values(data.highlighting);
        if(highlightingData.length > 0) {
        var autoSuggestions = [],
         autoSuggestResult;
        highlightingData.forEach(function(i) {
            autoSuggestions.push({'term': i.title_suggest[0]})
        });
        autoSuggestResult = {'count': highlightingData.length, 'suggestions': autoSuggestions};
        autoCompleteResult(autoSuggestResult);
       }
      }
    }
  });

}

function searchHighlightHeader(suggestedResult, searchTerm) {
	var suggResultLower = suggestedResult.toLowerCase(),
		srcTermLower = searchTerm.toLowerCase();
	if (suggResultLower.indexOf(srcTermLower) != -1) {
		var findIndex = suggResultLower.indexOf(srcTermLower),
			findLength = srcTermLower.length,
			updatedIndex = findIndex + findLength;
		return suggestedResult.substring(0, findIndex) + "<span class='highlight-search-keyword'>" + suggestedResult.substring(findIndex, updatedIndex) + "</span>" + suggestedResult.substring(updatedIndex);
	} else {
		return suggestedResult;
	}
}


function newCatdotcomSearchAutoSuggestHeader(searchInputEl, parent) {
	//var newSearchUrl = $("#searchResultsDiv").attr("mappedUrl") + '.newSearchServlet.html',
    var newSearchUrl = $("#pagePath").val() + '.newSearchServlet.html',
		jqInputEl = $(searchInputEl),
		searchTerm = null,
		suggBox = null,
		val = null,
		language;

	/* Check if at least 3 characters in search box */
	searchTerm = jqInputEl.val();
	if (searchTerm.length < 3) {
		return;
	}


  /*  Build box to display list of suggestions  */
  suggBoxSel = '#' + parent + searchInputEl.id + 'SuggBox';
  if(!$(suggBoxSel).length){
    suggBox = searchInputEl.parentNode.appendChild(document.createElement('div'));
    suggBox.id = parent + searchInputEl.id + "SuggBox";
    suggBoxSel = '#' + parent + searchInputEl.id + 'SuggBox';
  }
  $(suggBoxSel).attr('class','suggBox')
    .css({top: jqInputEl.parent("form").innerHeight(), left: '-1px'})
    .width(jqInputEl.parent("form").outerWidth()-1);

  val = searchInputEl.value;
  searchBoxSel = '#' + parent + ' #' + searchInputEl.id;

  language = getLanguageForSuggestions(location.pathname);

	/*  Call search engine for list of suggestions  */
	queryString = "searchText=" + searchTerm + '&start=0&rows=10&type=autoSuggest&language=' + language;
	$.ajax({
		type: "POST",
		url: newSearchUrl,
		data: queryString,
		success: function(data) {
            if (data && (data.fusion["Suggested Parts"].length > 0 || data.fusion["Suggested Keywords"].length > 0 || data.fusion["Suggested Content"].length > 0)) {
				$(suggBoxSel).show();
			} else {
				$(suggBoxSel).hide();
			}
			var autoSuggestResult = [];
			if (data && data.fusion["Suggested Parts"].length > 0) {
				var autoSuggestedPartsHeader = [],
					autoSuggestPartResultHeader;
				data.fusion["Suggested Parts"].forEach(function(i) {
					autoSuggestedPartsHeader.push({
						'term': i
					})
				});
				autoSuggestPartResultHeader = {
					'count': data.fusion["Suggested Parts"].length,
					'suggestions': autoSuggestedPartsHeader
				};
				autoCompletePartResultHeader(autoSuggestPartResultHeader,searchTerm);

			} else {
                var autoSuggestedPartsHeader = [],
					autoSuggestPartResultHeader;
				autoSuggestPartResultHeader = {
					'count': 0,
					'suggestions': ''
				};
				autoCompletePartResultHeader(autoSuggestPartResultHeader,searchTerm);
			}
			if (data && data.fusion["Suggested Keywords"].length > 0) {
				var autoSuggestedKeywordsHeader = [],
					autoSuggestKeywordResultHeader;
				data.fusion["Suggested Keywords"].forEach(function(i) {
					autoSuggestedKeywordsHeader.push({
						'term': i
					})
				});
				autoSuggestKeywordResultHeader = {
					'count': data.fusion["Suggested Keywords"].length,
					'suggestions': autoSuggestedKeywordsHeader
				};
				autoCompleteKeywordResultHeader(autoSuggestKeywordResultHeader,searchTerm);

			} else {
				var autoSuggestedKeywordsHeader = [],
					autoSuggestKeywordResultHeader;

				autoSuggestKeywordResultHeader = {
					'count': 0,
					'suggestions': ''
				};
				autoCompleteKeywordResultHeader(autoSuggestKeywordResultHeader,searchTerm);
			}
			if (data && data.fusion["Suggested Content"].length > 0) {
				var autoSuggestedContentHeader = [],
					autoSuggestContentResultHeader;
				data.fusion["Suggested Content"].forEach(function(i) {
					autoSuggestedContentHeader.push({
						'term': i
					})
				});
				autoSuggestContentResultHeader = {
					'count': data.fusion["Suggested Content"].length,
					'suggestions': autoSuggestedContentHeader
				};
				autoCompleteContentResultHeader(autoSuggestContentResultHeader,searchTerm);

			} else {
				var autoSuggestedContentHeader = [],
					autoSuggestContentResultHeader;

				autoSuggestContentResultHeader = {
					'count': 0,
					'suggestions': ''
				};
				autoCompleteContentResultHeader(autoSuggestContentResultHeader,searchTerm);
			}
		}
	});
}


function autoCompletePartResultHeader(res,searchTerm) {
	var val = [];
    var windowWidth = $(window).width();
var showElements = windowWidth > 768 ? 4 : 3;

		if ($('.focusSearchClicked').length > 0) {
			autoCompleteResultFolderSearchFocus(res);
		} else {

			//use tfn foldersearch instead
			if (typeof useAutoCompleteResultFolderSearch !== 'undefined' && useAutoCompleteResultFolderSearch) {
				autoCompleteResultFolderSearch(res);
			} else {
				// eslint-disable-next-line one-var, vars-on-top
				for (var i = 0; i < res.suggestions.length && i < showElements; ++i) {
                    var suggestedResult = res.suggestions[i].term,	
                    finalSearchResult = searchHighlightHeader(suggestedResult, searchTerm);
					val.push('<div class=sug onclick="selAndSubmitAutoComplete(\'', searchBoxSel, '\', \'', res.suggestions[i].term.replace("'", "\\'"), '\');return false;"><a href="">', finalSearchResult, '</a></div>');
                }
                $('#SuggProductsHeader').empty();
                $('#SuggProductsHeader').html(val.join(''));
				if (val.length > 0) {
					$('#SuggProductsHeader').parents('.suggestionBoxSearchHeader').show();
				} else {
					$('#SuggProductsHeader').parents('.suggestionBoxSearchHeader').hide();
				}
			}
		}
	}

function autoCompleteKeywordResultHeader(res,searchTerm) {
	var val = [];
    var windowWidth = $(window).width();
var showElements = windowWidth > 768 ? 4 : 3;

		if ($('.focusSearchClicked').length > 0) {
			autoCompleteResultFolderSearchFocus(res);
		} else {

			//use tfn foldersearch instead
			if (typeof useAutoCompleteResultFolderSearch !== 'undefined' && useAutoCompleteResultFolderSearch) {
				autoCompleteResultFolderSearch(res);
			} else {
				// eslint-disable-next-line one-var, vars-on-top
				for (var i = 0; i < res.suggestions.length && i < showElements; ++i) {
                    var suggestedResult = res.suggestions[i].term,	
                    finalSearchResult = searchHighlightHeader(suggestedResult, searchTerm);
					val.push('<div class=sug onclick="selAndSubmitAutoComplete(\'', searchBoxSel, '\', \'', res.suggestions[i].term.replace("'", "\\'"), '\');return false;"><a href="">', finalSearchResult, '</a></div>');
                }
                $('#SuggKeywordsHeader').empty();
				$('#SuggKeywordsHeader').html(val.join(''));
				if (val.length > 0) {
					$('#SuggKeywordsHeader').parents('.suggestionBoxSearchHeader').show();
				} else {
					$('#SuggKeywordsHeader').parents('.suggestionBoxSearchHeader').hide();
				}
			}
		}
	}

function autoCompleteContentResultHeader(res,searchTerm) {
	var val = [];
    var windowWidth = $(window).width();
var showElements = windowWidth > 768 ? 4 : 3;

    if ($('.focusSearchClicked').length > 0) {
			autoCompleteResultFolderSearchFocus(res);
		} else {

			//use tfn foldersearch instead
			if (typeof useAutoCompleteResultFolderSearch !== 'undefined' && useAutoCompleteResultFolderSearch) {
				autoCompleteResultFolderSearch(res);
			} else {
				// eslint-disable-next-line one-var, vars-on-top
				for (var i = 0; i < res.suggestions.length && i < showElements; ++i) {
                    var suggestedResult = res.suggestions[i].term.suggestion,	
                    finalSearchResult = searchHighlightHeader(suggestedResult, searchTerm);
                    val.push('<div class=sug><a href="', res.suggestions[i].term.url, '">', finalSearchResult, '</a></div>');
				}
                $('#SuggCategoriesHeader').empty();
				$('#SuggCategoriesHeader').html(val.join(''));
				if (val.length > 0) {
					$('#SuggCategoriesHeader').parents('.suggestionBoxSearchHeader').show();
				} else {
					$('#SuggCategoriesHeader').parents('.suggestionBoxSearchHeader').hide();
				}
			}
		}

}

$(document).on('click', 'body', function(e){
    if($('div#searchsearchInputSuggBox').is(':visible') && e.target.id !== "searchInput" && siteID == "catDotCom"){
        $('div#searchsearchInputSuggBox').css('display','none');
        $('div#searchsearchInputSuggBox').find('.suggestionBoxSearchHeader').css('display','none');
    }
});

$(document).on('focusout keydown', '.auth header.tfn.mega--nav .suggBox .suggestionBoxSearchHeader:last-of-type .sug:last-of-type', function(e){
    if($('div#searchsearchInputSuggBox').is(':visible') && e.type === "keydown" && e.keyCode === 9 && siteID == "catDotCom"){
        $('div#searchsearchInputSuggBox').css('display','none');
        $('div#searchsearchInputSuggBox').find('.suggestionBoxSearchHeader').css('display','none');
    }
});


/* Add <div> with <a href> for each suggestion */
// eslint-disable-next-line no-unused-vars
function autoCompleteResult(res) {
  var val = [];

  if($('.focusSearchClicked').length>0){
    autoCompleteResultFolderSearchFocus(res);
  } else {

    //use tfn foldersearch instead
    if (typeof useAutoCompleteResultFolderSearch !== 'undefined' && useAutoCompleteResultFolderSearch) {
      autoCompleteResultFolderSearch(res);
    } else {
      // eslint-disable-next-line one-var, vars-on-top
      for (var i = 0; i < res.suggestions.length && i < 10; ++i){
        val.push('<div class=sug onclick="selAndSubmitAutoComplete(\'', searchBoxSel, '\', \'', res.suggestions[i].term.replace(/<[^>]*>/g, ''), '\');return false;"><a href="">', res.suggestions[i].term, '</a></div>');}
        $(suggBoxSel).html(val.join(''));
      if (val.length > 0){
        $(suggBoxSel).show();
      }
      else {
        $(suggBoxSel).hide();
      }
      $('body').click(function(e) {
        if ($.contains($('.siteSearchForm').get(0), $(e.target).get(0)) && val.length > 0) {
          $(suggBoxSel).show();
        } else {
          $(suggBoxSel).hide();
        }
      });
    }
  }
}

/*  Submit the search form when suggestion clicked  */
// eslint-disable-next-line no-unused-vars
function selAndSubmitAutoComplete(inputSel, searchTerm){
  var inputEl = $(inputSel),
  	typedInput = $(inputEl).val(),
    currEl = null,
    queryStr = null,
    actionUrl = null,
    advanceSearch = null;

  inputEl.val(searchTerm);
  currEl = $(inputEl.parent().get(0));
  try{
    while(!currEl.is('form')){
      currEl = $(currEl.parent().get(0));
    }
  }catch(e){
    // continue regardless of error
  }

  // Serialize and encode all form fields
  queryStr = currEl.serialize();
  queryStr = encodeURI(queryStr);
  // Replace single quote manually since encoding won't encode it
  queryStr = queryStr.replace(/'/ig,'%27');

  actionUrl = currEl.attr("action") + "?";

    if($("#advanceSearchUrl").length > 0) {
        advanceSearch = $("#advanceSearchUrl").val();
        actionUrl = advanceSearch;
        queryStr = searchTerm;
    }

    if($("#advanceSearchUrl").length > 0) {
        formName= "advanced dealer search";
        formContent = currEl.find("#searchInput").val();
    } else if(currEl.attr("id")=== "search"){
        formName= "global search";
        formContent = currEl.find("#searchInput").val();
      } else {
        formName= "search results page form";
        formContent = currEl.find("#globalSearchInput").val();
      }

  if(currEl.attr("action")!==null && currEl.attr("action").trim().length>0){
    formStatus="Success";
  } else {
    formStatus = "Fail";
  }

  dataLayer.push({
    'event': 'formSubmitted',
    'pagePath': document.location.pathname,
    'formName': formName,
    'formContent': typedInput,
    'formContent2': searchTerm,
    'formStatus': formStatus
  });

	newSearchText = formContent;
	resetFilters();
	if($("#advanceSearchUrl").length > 0) {
        var lang = "&lang=" + getLanguageForSuggestions(location.pathname);
        window.open(actionUrl + queryStr + lang);
    } else {
        window.location.href = actionUrl + queryStr;
    }
}

//To reset the selected facets on new search
function resetFilters(){
    var oldSearchText = getSearchTextFromURL(),
    	queryStorage = sessionStorage.getItem('newSearchQuery');
    if(oldSearchText !== newSearchText && queryStorage){
    	sessionStorage.removeItem('newSearchQuery');
    }    
}

function getSearchTextFromURL() {
	  var searchTextRegex = /(.*)search=([^&]*)(?:(&.*))?/, urlParam = location.search, searchKey;
	  searchKey = urlParam.match(searchTextRegex);
	  if (searchKey !== null) {
	    return searchKey[2];
	  } else {
	    return "";
	  }
} 
