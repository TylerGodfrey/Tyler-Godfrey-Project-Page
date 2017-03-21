package webdev.project.first;

/**
 * Created by yerfd on 1/26/2017.
 */
public class Person {
    private Integer id;
    private String first;
    private String last;
    private String email;
    private String phone;
    private String birthday;

    public void setId (Integer id) {
        this.id = id;
    }

    public void setFirst (String first) {
        this.first = first;
    }

    public void setLast (String last) {
        this.last = last;
    }

    public void setEmail (String email) {
        this.email = email;
    }

    public void setPhone (String phone) {
        this.phone = phone;
    }

    public void setBirthday (String birthday) {
        this.birthday = birthday;
    }

    public Integer getId() {
        return id;
    }

    public String getFirst() {
        return first;
    }

    public String getLast() {
        return last;
    }

    public String getEmail() {
        return email;
    }

    public String getPhone() {
        return phone;
    }

    public String getBirthday() {
        return birthday;
    }

}