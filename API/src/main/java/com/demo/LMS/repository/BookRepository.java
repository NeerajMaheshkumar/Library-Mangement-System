package com.demo.LMS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.LMS.model.BookModel;

@Repository
public interface BookRepository extends JpaRepository<BookModel, Long>{

}
