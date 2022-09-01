package com.demo.LMS.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.demo.LMS.model.MemberModel;
import com.demo.LMS.repository.MemberRepository;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/LMS")

public class MemberController
{
	@Autowired
	private MemberRepository memberRepository;
	
	@GetMapping("/Members") 
	public String getMembers() 
	{
		 return "Hi LMS";
	}
		 
	
	@GetMapping("/Memberlist") 
	public List<MemberModel> getAllMembers() throws Exception
	{
		return memberRepository.findAll();		
	}
	
	@PostMapping("/SaveMember")
    public MemberModel createMember(@RequestBody MemberModel memberModel)
	{
        return memberRepository.save(memberModel);
    }
	
	@GetMapping("/members/{ID}")
	public ResponseEntity<MemberModel> getmemberById(@PathVariable(value = "ID") Long ID)
	throws Exception 
	{
		MemberModel member = memberRepository.findById(ID)
				.orElseThrow(() -> new Exception());
		return ResponseEntity.ok().body(member);
	}
	
	@DeleteMapping("/member/{ID}")
	public Map<String, Boolean> deleteMember(@PathVariable(value = "ID") Long ID)
			throws Exception 
	{
		MemberModel member = memberRepository.findById(ID)
				.orElseThrow(() -> new Exception());

		memberRepository.delete(member);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return response;
	}
	

	@PutMapping("/Member/{id}")
	public ResponseEntity<MemberModel> updateMember(@PathVariable(value = "id") Long ID,
			@Valid @RequestBody MemberModel memberDetails) throws Exception
	{
		MemberModel member = memberRepository.findById(ID)
				.orElseThrow(() -> new Exception());

		member.setMemberName(memberDetails.getMemberName());
		member.setPhoneNumber(memberDetails.getPhoneNumber());
		member.setMemberAddress(memberDetails.getMemberAddress());
		member.setAadharNo(memberDetails.getAadharNo());
		member.setGender(memberDetails.getGender());
		final MemberModel updatedMember = memberRepository.save(member);
		return ResponseEntity.ok(updatedMember);
	}
}
