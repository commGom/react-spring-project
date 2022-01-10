package com.ksa.project.dto;

import lombok.Data;
import org.springframework.data.domain.PageRequest;

@Data
public class PageDTO {
    private int page;               //현재 페이지
    private int pageSize;         //한 페이지에 담을 글의 개수 (default : 5)
    private int pageListSize;    //페이징하는 숫자의 개수 (default 10개로 할 예정 1,2,3,4,5,6,7,8,9,10
    private int totalPageCount;     //총 페이지의 개수
    private int startPage;          //시작 페이지
    private int endPage;            //마지막 페이지


    public static PageDTO createPageDTOwithPageSize(int page, int pageSize,int totalCount){
        //현재 페이지, 한 페이지에 보여줄 글의 갯수, 전체 글의 수(findAll().size()) 매개변수로 받기
        PageDTO pageDTO=new PageDTO();
        pageDTO.setPage(page);
        pageDTO.setPageSize(pageSize);
        pageDTO.setPageListSize(10);
        pageDTO.setTotalPageCount((totalCount%pageSize==0)?(totalCount/pageSize):(totalCount/pageSize)+1);
        pageDTO.setStartPage(page-(page-1)%pageDTO.getPageListSize());
        pageDTO.setEndPage((pageDTO.getStartPage()+pageDTO.getPageListSize()-1<pageDTO.getTotalPageCount())?(pageDTO.getStartPage()+pageDTO.getPageListSize()-1):(pageDTO.getTotalPageCount()));
        return pageDTO;
    }

    public PageRequest createPageRequest(){
        PageRequest pageRequest=PageRequest.of(this.page-1,this.pageSize);
        return pageRequest;
    }
}
