package Proba16.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Proba16.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: РегРезульт
 */
@Entity(name = "IISProba16РегРезульт")
@Table(schema = "public", name = "РегРезульт")
public class RegRezult {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ДатРегРезСобес")
    private Date датрегрезсобес;

    @Column(name = "ПринятНаРаб")
    private Boolean принятнараб;

    @Column(name = "НеПринНаРаб")
    private Boolean неприннараб;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Organizaciya")
    @Convert("Organizaciya")
    @Column(name = "Организация", length = 16, unique = true, nullable = false)
    private UUID _organizaciyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Organizaciya", insertable = false, updatable = false)
    private Organizaciya organizaciya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "PlanirSobes")
    @Convert("PlanirSobes")
    @Column(name = "ПланирСобес", length = 16, unique = true, nullable = false)
    private UUID _planirsobesid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "PlanirSobes", insertable = false, updatable = false)
    private PlanirSobes planirsobes;

    @OneToMany(mappedBy = "regrezult", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<TCHRegRezult> tchregrezults;


    public RegRezult() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Date getДатРегРезСобес() {
      return датрегрезсобес;
    }

    public void setДатРегРезСобес(Date датрегрезсобес) {
      this.датрегрезсобес = датрегрезсобес;
    }

    public Boolean getПринятНаРаб() {
      return принятнараб;
    }

    public void setПринятНаРаб(Boolean принятнараб) {
      this.принятнараб = принятнараб;
    }

    public Boolean getНеПринНаРаб() {
      return неприннараб;
    }

    public void setНеПринНаРаб(Boolean неприннараб) {
      this.неприннараб = неприннараб;
    }


}