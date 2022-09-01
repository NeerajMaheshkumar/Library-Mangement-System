package com.demo.LMS.model;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "t_Members")
public class MemberModel 
{
	private long id;
	private String MemberCode;
	private String MemberName;
	private long PhoneNumber;
	private String MemberAddress;
	private String AadharNo;
	private String Gender;
	
	public MemberModel() {}
	
	public MemberModel(String MemberCode, String MemberName, long PhoneNumber, String MemberAddress,String AadharNo,String Gender) {
		this.MemberCode = MemberCode;
		this.MemberName = MemberName;
		this.PhoneNumber = PhoneNumber;
		this.MemberAddress = MemberAddress;
		this.AadharNo = AadharNo;
		this.Gender= Gender;
	}
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	
	@Column(name = "MEMBERCODE", nullable = false)
	public String getMemberCode()
	{
		return MemberCode;
	}
	public void setMemberCode(String memberCode) {
		this.MemberCode = memberCode;
	}
	
	@Column(name = "MEMBERNAME", nullable = false)
	public String getMemberName()
	{
		return MemberName;
	}
	public void setMemberName(String memberName) {
		this.MemberName = memberName;
	}
	
	@Column(name = "PHONENUMBER", nullable = false)
	public long getPhoneNumber() {
		return PhoneNumber;
	}
	public void setPhoneNumber(long phoneNumber) {
		this.PhoneNumber = phoneNumber;
	}
	
	@Column(name = "MEMBERADDRESS", nullable = false)
	public String getMemberAddress() {
		return MemberAddress;
	}
	public void setMemberAddress(String memberAddress) {
		this.MemberAddress = memberAddress;
	}
	
	@Column(name = "AADHARNUMBER", nullable = false)
	public String getAadharNo() {
		return AadharNo;
	}
	public void setAadharNo(String aadharNo) {
		this.AadharNo = aadharNo;
	}
	
	@Column(name = "GENDER", nullable = false)
	public String getGender()
	{
		return Gender;
	}
	public void setGender(String gender) {
		this.Gender = gender;
	}

	@Override
	public String toString() 
	{
		return "Member[Member Code=" + MemberCode + ", MemberName=" + MemberName + ", Phone Number=" + PhoneNumber + ", MemberAddress=" + MemberAddress
				+ ", Aadhar Number=" + AadharNo + "Gender =" + Gender +"]";
	}
	
}
