package com.demo.LMS.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.demo.LMS.model.MemberModel;

@Repository
public interface MemberRepository extends JpaRepository<MemberModel, Long>{

}
